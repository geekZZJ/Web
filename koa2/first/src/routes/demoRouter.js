/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:15:07
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 17:22:28
 * @Description:
 */
import Router from "koa-router";
import demoController from "../api/demoController";
const router = new Router();

router.get("/demo", demoController.demo);

export default router;
