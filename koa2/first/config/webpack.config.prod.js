/*
 * @Author: 张中俊
 * @Date: 2020-10-17 14:41:31
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 16:02:03
 * @Description:
 */
const { merge } = require("webpack-merge");

const baseWebpackConfig = require("./webpack.config.base");
const TerserPlugin = require("terser-webpack-plugin");

const webpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  stats: { children: false, warnings: false },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          warnings: false,
          compress: {
            warnings: false,
            drop_console: false,
            drop_debugger: true,
            dead_code: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
        },
        parallel: true,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 3,
          enforce: true,
        },
      },
    },
  },
});

module.exports = webpackConfig;
