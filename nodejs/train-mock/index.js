/*
 * @Author: zzj
 * @Date: 2021-04-04 12:10:49
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-19 21:57:27
 * @Description:
 */
const express = require("express");

const app = express();

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
      { title: "C", cities: [{ name: "长春" }, { name: "长沙" }] },
    ],
    msg: "hello world",
  });
});

app.listen(4000);
