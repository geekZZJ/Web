/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:10:59
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-12 23:01:30
 * @Description:
 */
import koa from "koa";
import path from "path";
import helmet from "koa-helmet";
import statics from "koa-static";
import router from "./routes/routes";
const app = new koa();

app.use(helmet());
app.use(statics(path.join(__dirname, "/public")));
app.use(router());
app.listen(3000);
