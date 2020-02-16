var express = require("express");
var app = express();
var fs = require("fs");

app.use(haha);

app.listen(3000);

function haha(req,res) {
//    根据当前网址，读取public文件夹中文件
//    如果有这个文件，那么渲染这个文件
//    如果没有这个文件，那么next();
    fs.readFile("./public/"+filePath,function (err,data) {
        if (err){
            next();
            return;
        }
        res.send(data.toString());
    });
}