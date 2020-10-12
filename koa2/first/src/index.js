/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:10:59
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-12 20:38:00
 * @Description:
 */
const koa = require("koa");
const app = new koa();
const path = require("path");
const helmet = require("koa-helmet");
const statics = require("koa-static");

const router = require("./routes/routes");

app.use(helmet());
app.use(statics(path.join(__dirname, "/public")));
app.use(router());
app.listen(3000);
