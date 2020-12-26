/*
 * @Author: zzj
 * @Date: 2020-10-12 20:11:39
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-26 15:24:28
 * @Description:
 */
import combineRouters from "koa-combine-routers";
import publicRouter from "./publicRouter";
import loginRouter from "./loginRouter";
import userRouter from "./userRouter";
import contentRouter from "./contentRouter";

export default combineRouters(
  publicRouter,
  loginRouter,
  userRouter,
  contentRouter
);
