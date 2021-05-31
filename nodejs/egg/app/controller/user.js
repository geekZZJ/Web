/*
 * @Author: zzj
 * @Date: 2021-05-23 15:17:27
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-31 21:59:46
 * @Description:
 */
"use strict";

const Controller = require("egg").Controller;
class UserController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "user index";
  }

  async lists() {
    const { ctx } = this;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    ctx.body = [{ id: 123 }];
  }

  async detail() {
    const { ctx } = this;
    console.log(ctx.query);
    // const res = await ctx.service.user.detail(10);
    ctx.body = ctx.query.id;
  }

  async detail2() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = ctx.params.id;
  }

  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);

    const rule = {
      name: { type: "string" },
      age: { type: "number" },
    };
    ctx.validate(rule);
    ctx.body = {
      status: 200,
      data: ctx.request.body,
    };
  }

  async edit() {
    const { ctx } = this;
    ctx.body = ctx.request.body;
  }

  async del() {
    const { ctx } = this;
    ctx.body = ctx.request.body.id;
  }
}

module.exports = UserController;
