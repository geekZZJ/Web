/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:15:07
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-12 20:18:07
 * @Description:
 */
const Router = require("koa-router");
const a = require("../api/a");
const router = new Router();

router.get("/a", a);

module.exports = router;
