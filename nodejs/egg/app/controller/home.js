/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 13:44:56
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
    const params = ctx.params();
    console.log("params", params);
    ctx.body = "newContext";
  }

  async demo() {
    const { ctx } = this;
    console.log(ctx.info);
    ctx.body = "demo page";
  }
}

module.exports = HomeController;
