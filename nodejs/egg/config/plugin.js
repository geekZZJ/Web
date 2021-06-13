/*
 * @Author: zzj
 * @Date: 2021-05-22 18:33:11
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 16:03:28
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
