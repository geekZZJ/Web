/*
 * @Author: zzj
 * @Date: 2020-10-12 20:10:59
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-26 15:20:53
 * @Description:
 */
import koa from "koa";
import JWT from "koa-jwt";
import path from "path";
import helmet from "koa-helmet";
import statics from "koa-static";
import router from "./routes/routes";
import koaBody from "koa-body";
import jsonutil from "koa-json";
import cors from "@koa/cors";
import compose from "koa-compose";
import compress from "koa-compress";
import config from "./config";
import ErrorHandle from "./common/ErrorHandle";

const app = new koa();

const jwt = JWT({ secret: config.JWT_SECRET }).unless({
  path: [/^\/public/, /\/login/],
});

const isDevMode = process.env.NODE_ENV === "production" ? false : true;

// app.use(helmet());
// app.use(statics(path.join(__dirname, "/public")));
// app.use(router());

const middleware = compose([
  koaBody({
    multipart: true,
    formidable: { keepExtensions: true, maxFieldsSize: 5 * 1024 * 1024 },
    onError: (err) => {
      console.log(err);
    },
  }),
  statics(path.join(__dirname, "/public")),
  cors(),
  jsonutil({ pretty: false, param: "pretty" }),
  helmet(),
  ErrorHandle,
  jwt,
]);

if (!isDevMode) {
  app.use(compress());
}

app.use(middleware);
app.use(router());

app.listen(3000);
