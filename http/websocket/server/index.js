/*
 * @Author: zzj
 * @Date: 2021-03-04 22:03:41
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-07 15:28:20
 * @Description:
 */
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (ws) => {
  console.log("one client is connected");
  // 接收客户端消息
  ws.on("message", (msg) => {
    // 主动给客户端发送消息
    // ws.send(`server:${msg}`);
    // 广播消息
    wss.clients.forEach((client) => {
      // 判断非自己的客户端
      if (ws !== client && client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });
});
