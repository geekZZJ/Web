/*
 * @Author: zzj
 * @Date: 2020-10-12 20:15:07
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-08 16:58:32
 * @Description:
 */
import Router from "koa-router";
import publicController from "../api/PublicController";
const router = new Router();

router.prefix("/public");
router.get("/getCaptcha", publicController.getCaptcha);

export default router;
