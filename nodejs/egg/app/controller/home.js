/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 14:22:01
 * @Description:
 */
"use strict";

const Controller = require("egg").Controller;
// const info = require('../utils/info');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(info(), ctx.request.url);
    console.log(ctx.info);
    ctx.body = "hi, egg first app";
  }

  async newApplication() {
    const { ctx, app } = this;
    const packageInfo = app.package("scripts");
    // console.log("packageInfo", packageInfo);
    const allPack = app.allPackage;
    // console.log("allPack", allPack);
    ctx.body = "newApplication";
  }

  async newContext() {
    const { ctx } = this;
    const params = ctx.params("id");
    console.log("params", params);
    ctx.body = "newContext";
  }

  async newRequest() {
    const { ctx } = this;
    const token = ctx.request.token;
    ctx.body = token;
  }

  async newResponse() {
    const { ctx } = this;
    ctx.response.token = "abc123";
    const base64Parse = ctx.helper.base64Encode("newResponse");
    ctx.body = base64Parse;
  }

  async demo() {
    const { ctx } = this;
    console.log(ctx.info);
    ctx.body = "demo page";
  }
}

module.exports = HomeController;
