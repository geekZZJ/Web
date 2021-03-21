/*
 * @Author: zzj
 * @Date: 2021-03-21 15:05:46
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-21 21:55:19
 * @Description:
 */
// const Vue = require("vue");
const server = require("express")();
const { createBundleRenderer } = require("vue-server-renderer");
const fs = require("fs");
const path = require("path");
const resolve = (file) => path.resolve(__dirname, file);

const bundle = require("./dist/vue-ssr-server-bundle.json");
const clientManifest = require("./dist/vue-ssr-client-manifest.json");
const templatePath = resolve("./src/index.template.html");
const template = fs.readFileSync(templatePath, "utf-8");

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false, // 推荐
  template, // （可选）页面模板
  clientManifest, // （可选）客户端构建 manifest
});

// 在服务器处理函数中……
server.get("*", (req, res) => {
  const context = {
    title: "vue ssr",
    meta: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    `,
  };
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    // 处理异常……
    res.end(html);
  });
});

server.listen(8080);
