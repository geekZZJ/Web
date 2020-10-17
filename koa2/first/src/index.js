/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:10:59
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 17:29:53
 * @Description:
 */
import koa from "koa";
import path from "path";
import helmet from "koa-helmet";
import statics from "koa-static";
import router from "./routes/routes";
import koaBody from "koa-body";
import jsonutil from "koa-json";
import cors from "@koa/cors";
import compose from "koa-compose";
import compress from "koa-compress";

const app = new koa();

const isDevMode = process.env.NODE_ENV === "production" ? false : true;

// app.use(helmet());
// app.use(statics(path.join(__dirname, "/public")));
// app.use(router());

const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, "/public")),
  cors(),
  jsonutil({ pretty: false, param: "pretty" }),
  helmet(),
]);

if (!isDevMode) {
  app.use(compress());
}

app.use(middleware);
app.use(router());

app.listen(3000);
