/*
 * @Author: zzj
 * @Date: 2021-03-21 15:05:46
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 15:34:56
 * @Description:
 */
const app = require("express")();
const { createBundleRenderer } = require("vue-server-renderer");
const fs = require("fs");
const path = require("path");
const resolve = (file) => path.resolve(__dirname, file);
const isProd = process.env.NODE_ENV === "production";
const createRenderer = (bundle, options) => {
  return createBundleRenderer(
    bundle,
    Object.assign(options, {
      basedir: resolve("./dist"),
      runInNewContext: false,
    })
  );
};
let renderer;
let readyPromise;
const templatePath = resolve("./src/index.template.html");

if (isProd) {
  const bundle = require("./dist/vue-ssr-server-bundle.json");
  const clientManifest = require("./dist/vue-ssr-client-manifest.json");
  const template = fs.readFileSync(templatePath, "utf-8");

  renderer = createBundleRenderer(bundle, {
    template, // （可选）页面模板
    clientManifest, // （可选）客户端构建 manifest
  });
} else {
  readyPromise = require("./config/setup-dev-server.js")(
    app,
    templatePath,
    (bundle, options) => {
      console.log("createRenderer", createRenderer(bundle, options));
      renderer = createRenderer(bundle, options);
    }
  );
}

// 在服务器处理函数中
const render = (req, res) => {
  const context = {
    title: "vue ssr",
    meta: `
        <meta name="keyword" content="vue,ssr">
        <meta name="description" content="vue srr demo">
    `,
    url: req.url,
  };
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end("Page not found");
      } else {
        res.status(500).end("Internal Server Error");
      }
    } else {
      res.end(html);
    }
  });
};

app.get(
  "*",
  isProd
    ? render
    : (req, res) => {
        readyPromise.then(() => {
          render(req, res);
        });
      }
);

app.listen(8080);
