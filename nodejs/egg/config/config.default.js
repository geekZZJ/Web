/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 18:45:10
 * @Description:
 */
/* eslint valid-jsdoc: "off" */

"use strict";
const path = require("path");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1621679575963_5162";

  // add your middleware config here
  config.middleware = ["httpLog"];
  config.httpLog = {
    type: "all",
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      ".html": "ejs",
    },
    root: [
      path.join(appInfo.baseDir, "app/html"),
      path.join(appInfo.baseDir, "app/view"),
    ].join(","),
  };

  config.mysql = {
    app: true,
    agent: false,
    client: {
      host: "localhost",
      port: "3306",
      user: "root",
      password: "2461927976",
      database: "egg",
    },
  };

  config.ejs = {
    delimiter: "%",
  };

  config.session = {
    key: "test",
    httpOnly: true,
    maxAge: 1000 * 5,
    renew: false,
  };

  config.static = {
    prefix: "/assets/",
    dir: path.join(appInfo.baseDir, "app/assets"),
  };

  config.auth = {
    exclude: ["/home", "/user"],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
