/*
 * @Author: zzj
 * @Date: 2021-03-25 16:59:05
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 15:00:45
 * @Description:
 */
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");
const clientConfig = require("./webpack.client.config");
const serverConfig = require("./webpack.server.config");
const webpack = require("webpack");
const middleware = require("webpack-dev-middleware");
const HMR = require("webpack-hot-middleware");
const MFS = require("memory-fs");

const readFile = (fs, file) => {
  try {
    return fs.readFileSync(path.join(clientConfig.output.path, file), "utf-8");
  } catch (error) {
    console.log(error);
  }
};

const setupServer = (app, templatePath, cb) => {
  let bundle;
  let clientManifest;
  let template;
  let ready;
  const readyPromise = new Promise((r) => (ready = r));
  template = fs.readFileSync(templatePath, "utf-8");
  const update = () => {
    if (bundle && clientManifest) {
      // 通知server进行渲染
      // 执行createRender -> renderToString
      ready();
      cb(bundle, { template, clientManifest });
    }
  };
  // webpack -> entry-server -> bundle
  const mfs = new MFS();
  const serverCompiler = webpack(serverConfig);
  serverCompiler.outputFileSystem = mfs;
  serverCompiler.watch({}, (err, stats) => {
    stats = stats.toJson();
    stats.errors.forEach((err) => {
      console.error(err);
    });
    stats.warnings.forEach((err) => {
      console.warn(err);
    });
    if (stats.errors.length) {
      return;
    }
    bundle = JSON.parse(readFile(mfs, "vue-ssr-server-bundle.json"));
    update();
  });
  // webpack -> entry-client -> clientManifest
  clientConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  clientConfig.entry.app = [
    "webpack-hot-middleware/client",
    clientConfig.entry.app,
  ];
  const clientCompiler = webpack(clientConfig);
  const devMiddleware = middleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
  });
  app.use(devMiddleware);
  app.use(HMR(clientCompiler));
  clientCompiler.hooks.done.tap("clientsBuild", (stats) => {
    stats = stats.toJson();
    stats.errors.forEach((err) => {
      console.error(err);
    });
    stats.warnings.forEach((err) => {
      console.warn(err);
    });
    if (stats.errors.length) {
      return;
    }
    clientManifest = JSON.parse(
      readFile(
        devMiddleware.context.outputFileSystem,
        "vue-ssr-client-manifest.json"
      )
    );
    update();
  });
  // fs -> templatePath -> template
  chokidar.watch(templatePath).on("change", () => {
    template = fs.readFileSync(templatePath, "utf-8");
    update();
  });
  return readyPromise;
};

module.exports = setupServer;
