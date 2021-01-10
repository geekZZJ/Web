/*
 * @Author: zzj
 * @Date: 2021-01-10 18:23:31
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-10 22:23:00
 * @Description:
 */
import express from "express";
import router from "./router";
import bodyParser from "body-parser";

// 问题1：express的类型定义文件.d.ts文件类型描述不准确
// 问题2：当我使用中间件的时候，对req和res做了修改之后，实际上类型不会变

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

app.listen(7001, () => {
  console.log("server is running");
});
