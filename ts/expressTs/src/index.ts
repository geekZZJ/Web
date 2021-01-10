/*
 * @Author: zzj
 * @Date: 2021-01-10 18:23:31
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-10 21:50:01
 * @Description:
 */
import express from "express";
import router from "./router";

const app = express();
app.use(router);

app.listen(7001, () => {
  console.log("server is running");
});
