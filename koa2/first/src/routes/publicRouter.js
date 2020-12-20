/*
 * @Author: zzj
 * @Date: 2020-10-12 20:15:07
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-20 15:50:30
 * @Description:
 */
import Router from "koa-router";
import publicController from "../api/PublicController";
import contentController from "../api/ContentController";
import userController from "../api/UserController";
const router = new Router();

router.prefix("/public");

// 获取图形验证码
router.get("/getCaptcha", publicController.getCaptcha);

// // 获取文章列表
// router.get("/list", contentController.getPostList);

// // 温馨提醒
// router.get("/tips", contentController.getTips);

// // 友情链接
// router.get("/links", contentController.getLinks);

// // 回复周榜
// router.get("/topWeek", contentController.getTopWeek);

// 确认修改邮件
router.get("/resetEmail", userController.updateUsername);

export default router;
