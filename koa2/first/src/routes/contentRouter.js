/*
 * @Author: zzj
 * @Date: 2020-12-26 15:08:15
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-26 15:10:38
 * @Description:
 */
import Router from "koa-router";
import contentController from "../api/ContentController";

const router = new Router();

router.prefix("/content");
router.post("/upload", contentController.uploadImg);

export default router;
