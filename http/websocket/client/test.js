/*
 * @Author: zzj
 * @Date: 2021-03-04 22:12:19
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-28 14:57:37
 * @Description:
 */
const WebSocket = require("ws");

const ws = new WebSocket("ws://127.0.0.1:3000", { headers: { token: 123 } });

// ws.on("open", () => {
//   console.log("client is connected to server");
//   ws.send("client say hello to server");
//   ws.on("message", (msg) => {
//     console.log(msg);
//   });
// });
