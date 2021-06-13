/*
 * @Author: zzj
 * @Date: 2021-06-12 22:11:22
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-13 13:30:17
 * @Description:
 */
"use strict";

const path = require("path");

module.exports = {
  // 方法扩展
  package(key) {
    const pack = getPack();
    return key ? pack[key] : pack;
  },

  // 属性扩展
  get allPackage() {
    return getPack();
  },
};

function getPack() {
  const filePath = path.join(process.cwd(), "package.json");
  const pack = require(filePath);
  return pack;
}
