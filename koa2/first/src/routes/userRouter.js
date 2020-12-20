/*
 * @Author: zzj
 * @Date: 2020-12-06 15:29:13
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-20 11:19:25
 * @Description:
 */
import Router from "koa-router";
import UserController from "../api/UserController";

const router = new Router();

router.prefix("/user");

// 用户签到
router.get("/fav", UserController.userSign);

// 更新用户基本信息
router.post("/basic", UserController.updateUserInfo);

export default router;
