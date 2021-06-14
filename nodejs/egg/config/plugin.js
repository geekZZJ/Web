/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-14 18:21:20
 * @Description:
 */
"use strict";

// /** @type Egg.EggPlugin */
// module.exports = {
// had enabled by egg
// static: {
//   enable: true,
// }
// };

const path = require("path");

exports.info = {
  enable: true,
  path: path.join(__dirname, "../lib/plugin/egg-info"),
};

exports.auth = {
  enable: true,
  path: path.join(__dirname, "../lib/plugin/egg-auth"),
};

exports.validate = {
  enable: true,
  package: "egg-validate",
};

exports.ejs = {
  enable: true,
  package: "egg-view-ejs",
};

exports.mysql = {
  enable: true,
  package: "egg-mysql",
};

exports.sequelize = {
  enable: true,
  package: "egg-sequelize",
};
