/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:15:07
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-18 15:20:58
 * @Description:
 */
import Router from "koa-router";
import publicController from "../api/PublicController";
const router = new Router();

router.get("/getCaptcha", publicController.getCaptcha);

export default router;
