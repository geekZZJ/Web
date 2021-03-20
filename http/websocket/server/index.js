/*
 * @Author: zzj
 * @Date: 2021-03-04 22:03:41
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-20 22:35:06
 * @Description:
 */
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

let group = {};

wss.on("connection", (ws) => {
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
