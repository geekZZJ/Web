/*
 * @Author: zzj
 * @Date: 2020-10-25 12:22:55
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-25 12:29:25
 * @Description:
 */
import Router from "koa-router";
import loginController from "../api/LoginController";

const router = new Router();

router.post("/forget", loginController.forget);

export default router;
