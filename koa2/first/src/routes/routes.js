/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:11:39
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-18 15:16:22
 * @Description:
 */
import combineRouters from "koa-combine-routers";
import publicRouter from "./publicRouter";

export default combineRouters(publicRouter);
