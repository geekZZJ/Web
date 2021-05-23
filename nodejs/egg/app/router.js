/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-23 12:44:21
 * @Description:
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/demo", controller.home.demo);
};
