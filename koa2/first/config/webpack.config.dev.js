/*
 * @Author: 张中俊
 * @Date: 2020-10-17 14:41:08
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 15:59:03
 * @Description:
 */
const { merge } = require("webpack-merge");

const baseWebpackConfig = require("./webpack.config.base");

const webpackConfig = merge(baseWebpackConfig, {
  devtool: "eval-source-map",
  mode: "development",
  stats: { children: false },
});

module.exports = webpackConfig;
