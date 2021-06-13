/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 13:37:28
 * @Description:
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/newApplication", controller.home.newApplication);
  router.get("/newContext", controller.home.newContext);
  router.get("/demo", controller.home.demo);
  router.get("/user", controller.user.index);
  router.post("/user/login", controller.user.login);
  router.post("/user/logout", controller.user.logout);
  router.get("/user/lists", controller.user.lists);
  router.get("/user/detail", controller.user.detail);
  router.get("/user/detail2/:id", controller.user.detail2);
  router.post("/user/add", controller.user.add);
  router.put("/user/edit", controller.user.edit);
  router.del("/user/del", controller.user.del);
  router.get("/curl/get", controller.curl.curlGet);
  router.post("/curl/post", controller.curl.curlPost);
};
