/*
 * @Author: zzj
 * @Date: 2020-10-11 17:02:03
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-07 20:42:40
 * @Description:
 */
const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");
const koaBody = require("koa-body");
const json = require("koa-json");
const app = new Koa();
const router = new Router();

router.prefix("/api");

router.get("/", (ctx) => {
  // console.log(ctx);
  console.log(ctx.request);
  ctx.body = "hello world";
});

router.get("/api", (ctx) => {
  const params = ctx.request.query;
  console.log(params);
  // console.log(ctx);
  console.log(ctx.request);
  ctx.body = {
    name: params.name,
    age: params.age,
  };
});

router.get("/async", async (ctx) => {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello world delay 2s");
    }, 2000);
  });
  ctx.body = result;
});

router.post("/post", async (ctx) => {
  let { body } = ctx.request;
  console.log(body);
  console.log(ctx.request);
  ctx.body = {
    ...body,
  };
});

app.use(koaBody());
app.use(cors());
app.use(
  json({
    pretty: false,
    param: "pretty",
  })
);
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
