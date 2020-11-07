/*
 * @Author: zzj
 * @Date: 2020-10-12 20:15:07
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-07 20:31:27
 * @Description:
 */
import Router from "koa-router";
import publicController from "../api/PublicController";
const router = new Router();

router.get("/getCaptcha", publicController.getCaptcha);

export default router;
