/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-23 14:58:35
 * @Description:
 */
"use strict";

const Controller = require("egg").Controller;
const info = require("../utils/info");

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log(info(), ctx.request.url);
    console.log(ctx.info);
    ctx.body = "hi, egg first app";
  }

  async demo() {
    const { ctx } = this;
    console.log(ctx.info);
    ctx.body = "demo page";
  }
}

module.exports = HomeController;
