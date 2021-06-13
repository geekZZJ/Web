/*
 * @Author: zzj
 * @Date: 2021-06-10 15:58:28
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-12 22:28:44
 * @Description:
 */
"use strict";
module.exports = (options) => {
  return async (ctx, next) => {
    console.log("m1 start");
    await next();
    console.log("m1 end");
  };
};
