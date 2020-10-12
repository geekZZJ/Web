/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:15:27
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-12 20:18:42
 * @Description:
 */
const Router = require("koa-router");
const b = require("../api/b");
const router = new Router();

router.get("/b", b);

module.exports = router;
