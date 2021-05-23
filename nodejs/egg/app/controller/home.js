/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-23 12:42:08
 * @Description:
 */
"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg first app";
  }

  async demo() {
    const { ctx } = this;
    ctx.body = "demo page";
  }
}

module.exports = HomeController;
