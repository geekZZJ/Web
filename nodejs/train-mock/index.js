/*
 * @Author: zzj
 * @Date: 2021-04-04 12:10:49
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-21 10:06:48
 * @Description:
 */
const express = require("express");
const app = express();

//设置跨域访问
app.all("*", function (req, res, next) {
  // 设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  // 允许的header类型
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  // 跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  // 可以带cookies
  res.header("Access-Control-Allow-Credentials", true);
  if (req.method == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.get("/", (request, response) => {
  response.status(200);
  response.send("hello express");
  response.end();
});

app.get("/rest", (request, response) => {
  response.json({
    result: 1,
    msg: "hello world",
  });
});

app.get("/rest/cities", (request, response) => {
  response.json({
    cityList: [
      { title: "A", cities: [{ name: "阿尔山" }, { name: "阿克苏" }] },
      { title: "B", cities: [{ name: "包头" }, { name: "北海" }] },
      {
        title: "C",
        cities: [{ name: "长春" }, { name: "长沙" }, { name: "长治" }],
      },
      {
        title: "D",
        cities: [
          { name: "大理" },
          { name: "大连" },
          { name: "大庆" },
          { name: "大同" },
          { name: "达县" },
        ],
      },
      {
        title: "E",
        cities: [{ name: "鄂尔多斯" }],
      },
      {
        title: "F",
        cities: [{ name: "福州" }, { name: "佛山" }],
      },
    ],
    msg: "hello world",
  });
});

app.get("/rest/search", (request, response) => {
  response.json({
    sKey: "a",
    result: [{ display: "阿克苏" }, { display: "阿尔山" }],
  });
});

app.listen(4000);
