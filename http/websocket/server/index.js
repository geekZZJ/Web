/*
 * @Author: zzj
 * @Date: 2021-03-04 22:03:41
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-09 15:14:41
 * @Description:
 */
const WebSocket = require("ws");
const http = require("http");
const server = http.createServer();
const wss = new WebSocket.Server({ noServer: true });
const jwt = require("jsonwebtoken");

const timeInterval = 1000;

let group = {};

wss.on("connection", (ws) => {
  ws.isAlive = true;
  console.log("one client is connected");
  // 接收客户端消息
  ws.on("message", (msg) => {
    const msgObj = JSON.parse(msg);
    if (msgObj.event === "enter") {
      ws.name = msgObj.message;
      ws.roomid = msgObj.roomid;
      if (typeof group[ws.roomid] === "undefined") {
        group[ws.roomid] = 1;
      } else {
        group[ws.roomid]++;
      }
    }
    // 鉴权
    if (msgObj.event === "auth") {
      jwt.verify(msgObj.message, "secret", (err, decode) => {
        if (err) {
          ws.send(
            JSON.stringify({ event: "noauth", message: "please auth again" })
          );
          return;
        } else {
          // 鉴权通过
          console.log(decode);
          ws.isAuth = true;
          return;
        }
      });
      return;
    }
    // 拦截非鉴权的请求
    if (!ws.isAuth) {
      return;
    }
    // 心跳监测
    if (msgObj.event === "heartbeat" && msgObj.message === "pong") {
      ws.isAlive = true;
      return;
    }
    // 主动给客户端发送消息
    // ws.send(`server:${msg}`);
    // 广播消息
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      if (client.readyState === WebSocket.OPEN && client.roomid === ws.roomid) {
        msgObj.name = ws.name;
        msgObj.num = group[ws.roomid];
        client.send(JSON.stringify(msgObj));
      }
    });
  });

  ws.on("close", () => {
    if (ws.name) {
      group[ws.roomid]--;
    }
    let msgObj = {};
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      if (client.readyState === WebSocket.OPEN && ws.roomid === client.roomid) {
        msgObj.name = ws.name;
        msgObj.num = group[ws.roomid];
        msgObj.event = "out";
        client.send(JSON.stringify(msgObj));
      }
    });
  });
});

server.on("upgrade", function upgrade(request, socket, head) {
  console.log("upgrade -> request", request.headers);
  // This function is not defined on purpose. Implement it with your own logic.
  // authenticate(request, (err, client) => {
  //   if (err || !client) {
  //     socket.write("HTTP/1.1 401 Unauthorized\r\n\r\n");
  //     socket.destroy();
  //     return;
  //   }

  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit("connection", ws, request);
  });
  // });
});

server.listen(3000);

setInterval(() => {
  wss.clients.forEach((ws) => {
    if (!ws.isAlive && ws.roomid) {
      group[ws.roomid]--;
      delete ws["roomid"];
      return ws.terminate();
    }
    // 主动发送心跳监测请求
    ws.isAlive = false;
    ws.send(
      JSON.stringify({
        event: "heartbeat",
        message: "ping",
        num: group[ws.roomid],
      })
    );
  });
}, timeInterval);
