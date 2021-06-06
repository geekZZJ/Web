/*
 * @Author: zzj
 * @Date: 2021-06-06 15:45:26
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-06 16:01:25
 * @Description:
 */
"use strict";

const Controller = require("egg").Controller;

class CurlController extends Controller {
  async curlGet() {
    const { ctx } = this;
    const result = await ctx.curl("http://localhost:7001", {
      dataType: "text",
    });
    console.log("index -> result", result);
    ctx.body = {
      status: 200,
      data: result.data,
    };
  }

  async curlPost() {
    const { ctx } = this;
    const result = await ctx.curl("http://localhost:7001/user/login", {
      method: "POST",
      contentType: "json",
      data: ctx.request.body,
      dataType: "json",
    });
    ctx.body = result.data;
  }
}

module.exports = CurlController;
