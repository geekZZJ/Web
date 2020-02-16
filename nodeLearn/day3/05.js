var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render("form");
});

app.post("/",function (req,res) {
    res.send("成功");
});

app.listen(3000);