var express = require("express");
var app = express();
var db = require("./model/db.js");

app.get("/chax  un",function(req,res) {
    var sql1 = "select count(*) as count from user";
    var sql2 = "select * from user where sex = '女'";

    db.query(sql1, function (err, result1) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("用户数量：", result1[0].count);
    });


    db.query(sql2, function (err, result2) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("用户数据", result2);
    });
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    res.end("连接成功");
});


app.get("/du",function (req,res) {
    console.log(123);
//    这个页面现在接受一个page参数
    var page = req.query.page;   //express中读取get参数很简单
    var sql3 = "select * from user";
    db.query(sql3,function (err,result3) {
        if (err){
            console.log(err);
            callback(err);
            return;
        }
        console.log(result3);
    })
});

app.listen(3000);