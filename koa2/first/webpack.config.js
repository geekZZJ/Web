/*
 * @Author: 张中俊
 * @Date: 2020-10-12 20:55:05
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-13 21:41:26
 * @Description:
 */
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackconfig = {
  target: "node",
  mode: "development",
  entry: {
    server: path.join(__dirname, "src/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "./dist"),
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: [path.join(__dirname, "/node_modules")],
      },
    ],
  },
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
};

console.log("webpack", webpackconfig);

module.exports = webpackconfig;
