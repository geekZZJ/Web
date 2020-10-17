/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:11:39
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 17:24:17
 * @Description:
 */
import combineRouters from "koa-combine-routers";
import demoRouter from "./demoRouter";

export default combineRouters(demoRouter);
