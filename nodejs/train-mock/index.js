/*
 * @Author: zzj
 * @Date: 2021-04-04 12:10:49
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-20 16:49:15
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

app.listen(4000);
