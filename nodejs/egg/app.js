/*
 * @Author: zzj
 * @Date: 2021-05-23 14:37:20
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 18:51:54
 * @Description:
 */
"use strict";

module.exports = (app) => {
  app.messenger.on("agentAction", (data) => {
    console.log(data);
  });
  const store = {};
  app.sessionStore = {
    async get(key) {
      return store[key];
    },
    async set(key, value, maxAge) {
      store[key] = value;
    },
    async destroy(key) {
      store[key] = null;
    },
  };

  app.config.coreMiddleware.push("auth");
};
