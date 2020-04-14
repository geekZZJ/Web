var express = require("express");
var app = express();
var db = require("./model/db.js");


// app.get("/",function(req,res){
//
// 	var connection = mysql.createConnection({
// 		host:'127.0.0.1',
// 		user:'root',
// 		password:'2461927976',
// 		database:'stu'
// 	});
//
// 	connection.connect(function(err){
// 		if (err) {
// 			console.log("数据库连接失败");
// 			return;
// 		}
// 		console.log("数据库连接成功");
// 		var addsql = "insert into user(id,name,sex,age,tel) value(?,?,?,?,?)";
// 		var addsqlparams = ['1','年少轻狂','女',20,'123456789'];
// 		connection.query(addsql,addsqlparams,function(err,result){
// 			if (err) {
// 				console.log(err.message);
// 				return;
// 			}
// 			console.log('insert id:',result);
// 		})
// 	});
// 	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
// 	res.end("连接成功");
// });


app.get("/",function(req,res) {
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

app.listen(3000);