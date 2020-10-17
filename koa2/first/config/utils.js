/*
 * @Author: 张中俊
 * @Date: 2020-10-17 15:36:18
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 16:47:15
 * @Description:
 */
const path = require("path");

exports.resolve = function resolve(dir) {
  return path.join(__dirname, "..", dir);
};

exports.APP_PATH = exports.resolve("src");
exports.DIST_PATH = exports.resolve("dist");
