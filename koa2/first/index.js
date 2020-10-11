/*
 * @Author: 张中俊
 * @Date: 2020-10-11 17:02:03
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-11 17:31:28
 * @Description:
 */
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = "hello world";
});

router.get("/api", (ctx) => {
  console.log(ctx);
  console.log(ctx.request);
  ctx.body = "hello API";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
