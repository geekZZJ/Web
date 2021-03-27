/*
 * @Author: zzj
 * @Date: 2021-03-21 15:12:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-26 22:13:47
 * @Description:
 */
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config.js");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

module.exports = merge(baseConfig, {
  entry: {
    app: "./src/entry-client.js",
  },
  optimization: {
    // 重要信息：这将 webpack 运行时分离到一个引导 chunk 中，
    // 以便可以在之后正确注入异步 chunk。
    // 这也为你的 应用程序/vendor 代码提供了更好的缓存。
    splitChunks: {
      name: "manifest",
      minChunks: Infinity,
    },
  },
  plugins: [
    // 此插件在输出目录中
    // 生成 `vue-ssr-client-manifest.json`。
    new VueSSRClientPlugin(),
  ],
});
