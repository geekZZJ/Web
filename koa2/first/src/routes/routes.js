/*
 * @Author: zzj
 * @Date: 2020-10-12 20:11:39
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-06 15:41:08
 * @Description:
 */
import combineRouters from "koa-combine-routers";
import publicRouter from "./publicRouter";
import loginRouter from "./loginRouter";
import userRouter from "./userRouter";

export default combineRouters(publicRouter, loginRouter, userRouter);
