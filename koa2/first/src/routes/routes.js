/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:11:39
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-25 12:31:18
 * @Description:
 */
import combineRouters from "koa-combine-routers";
import publicRouter from "./publicRouter";
import loginRouter from "./loginRouter";

export default combineRouters(publicRouter, loginRouter);
