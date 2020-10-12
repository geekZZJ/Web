/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:11:39
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-12 20:21:41
 * @Description:
 */
const combineRouters = require("koa-combine-routers");

const aroutes = require("./aRouter");
const broutes = require("./bRouter");

module.exports = combineRouters(aroutes, broutes);
