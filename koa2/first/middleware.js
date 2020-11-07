/*
 * @Author: zzj
 * @Date: 2020-10-11 17:35:42
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-07 20:42:48
 * @Description:
 */
const Koa = require("koa");
const app = new Koa();

const middleware = async function (ctx, next) {
  console.log("this is a middleware");
  console.log(ctx.request.path);
  // next();
};

const middleware1 = async function (ctx, next) {
  console.log("this is a middleware1");
  console.log(ctx.request.path);
  next();
  console.log("this is a middleware1 end");
};

const middleware2 = async function (ctx, next) {
  console.log("this is a middleware2");
  console.log(ctx.request.path);
  next();
  console.log("this is a middleware2 end");
};

app.use(middleware1);
app.use(middleware2);
app.use(middleware);

app.listen(3000);
