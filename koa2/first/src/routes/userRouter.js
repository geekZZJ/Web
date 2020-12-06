/*
 * @Author: zzj
 * @Date: 2020-12-06 15:29:13
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-06 15:40:38
 * @Description:
 */
import Router from "koa-router";
import UserController from "../api/UserController";

const router = new Router();

router.prefix("/user");
router.get("/fav", UserController.userSign);

export default router;
