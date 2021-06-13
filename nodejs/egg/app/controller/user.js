/*
 * @Author: zzj
 * @Date: 2021-05-23 15:17:27
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 16:33:26
 * @Description:
 */
"use strict";

const Controller = require("egg").Controller;
class UserController extends Controller {
  encode(str = "") {
    return new Buffer(str).toString("base64");
  }
  decode(str = "") {
    return new Buffer(str, "base64").toString();
  }
  async index() {
    const { ctx } = this;

    const session = ctx.session.user;
    console.log("session", session);
    // console.log("zh", ctx.session.zh);

    // ctx.body = 'user index';
    // ctx.cookies.set("zh", "测试", {
    //   encrypt: true,
    // });

    // const zh = ctx.cookies.get("zh", { encrypt: true });

    // ctx.cookies.set("base64", this.encode("中文"));
    // const base64 = this.decode(ctx.cookies.get("base64"));
    // console.log(base64);

    const user = ctx.cookies.get("user");
    await ctx.render(
      "user.html",
      {
        id: 100,
        name: "admin",
        lists: ["java", "php", "python"],
        user: user ? JSON.parse(user) : null,
      },
      { delimiter: "%" }
    );
  }

  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.cookies.set("user", JSON.stringify(body), {
      maxAge: 1000 * 60,
      httpOnly: false,
    });

    // 保存session
    ctx.session.user = body;
    // ctx.session.zh = "中文";

    ctx.body = {
      status: 200,
      data: body,
    };
  }

  async logout() {
    const { ctx } = this;
    ctx.cookies.set("user", null);
    ctx.session.user = null;
    ctx.body = {
      status: 200,
    };
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
    // console.log(ctx.query);
    const res = await ctx.service.user.detail(10);
    console.log(res);
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
