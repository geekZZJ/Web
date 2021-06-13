/*
 * @Author: zzj
 * @Date: 2021-06-10 16:05:12
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-12 22:31:32
 * @Description:
 */
"use strict";

const dayjs = require("dayjs");
const fs = require("fs");

module.exports = (options) => {
  return async (ctx, next) => {
    // console.log("ctx", ctx);
    const sTime = Date.now();
    const startTime = dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss");
    const req = ctx.request;
    await next();
    const log = {
      method: req.method,
      url: req.url,
      data: req.body,
      startTime,
      endTime: dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
      timeLength: Date.now() - sTime,
    };
    // console.log("log", log);
    const data =
      dayjs(Date.now()).format("YYYY-MM-DD HH:mm:ss") +
      " [httpLog] " +
      JSON.stringify(log) +
      "\r\n";
    fs.appendFileSync(ctx.app.baseDir + "/httpLog.log", data);
  };
};
