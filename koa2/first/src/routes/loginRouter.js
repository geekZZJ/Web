/*
 * @Author: zzj
 * @Date: 2020-10-25 12:22:55
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-14 22:16:15
 * @Description:
 */
import Router from "koa-router";
import loginController from "../api/LoginController";

const router = new Router();

router.prefix("/login");
router.post("/forget", loginController.forget);
router.post("/login", loginController.login);
router.post("/reg", loginController.reg);

export default router;
