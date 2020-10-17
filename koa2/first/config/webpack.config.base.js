/*
 * @Author: 张中俊
 * @Date: 2020-10-17 14:40:37
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 15:52:23
 * @Description:
 */
const path = require("path");
const utils = require("./utils");
const webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackconfig = {
  target: "node",
  entry: {
    server: path.join(utils.APP_PATH, "index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: utils.DIST_PATH,
  },
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
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV:
          process.env.NODE_ENV === "production" ||
          process.env.NODE_ENV === "prod"
            ? "'production'"
            : "'development'",
      },
    }),
  ],
  node: {
    global: true,
    __filename: true,
    __dirname: true,
  },
};

module.exports = webpackconfig;
