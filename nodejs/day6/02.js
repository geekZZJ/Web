var express = require("express");
var app = express();
var formidable = require('formidable');
var mysql = require("mysql");
var md5 = require("./model/md5.js");

var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '2461927976',       
  port: '3306',                   
  database: 'stu', 
}); 

app.set("view engine","ejs");

app.use(express.static("./public"));

app.get("/regist",function(req,res){
	res.render("regist");
});

app.get("/login",function(req,res,next){
	res.render("login");
});

app.get("/doregist",function(req,res,next){
    // var form = new formidable.IncomingForm();
 
    // form.parse(req, function(err, fields, files) {
    // 	console.log("我是node服务器"+files.dengluming+files.mima);
    // });
    var dengluming = req.query.dengluming;
    var mima = req.query.mima;

    // 加密
    mima = md5(md5(mima).substr(4,7)+md5(mima));

    // 把用户名和密码存入数据库
    var addSql = "insert into user(name,password) values("+'\"'+dengluming+'\"'+","+'\"'+mima+'\"'+")";
    connection.query(addSql,function(err,result){
    	if (err) {
			console.log(err.message);
			res.send("-1");
			return;
    	}
    	else{
    		res.send("1");
    	}
    });
});

app.post("/dologin",function(req,res,next){
	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
    	var dengluming = fields.dengluming;
    	var mima = fields.mima;
    	// console.log(dengluming);
    	mima = md5(md5(mima).substr(4,7)+md5(mima));

    	// 检索数据库
    	var searchSql = "select * from user where name="+'\"'+dengluming+'\"';
    	connection.query(searchSql,function(err,result){
	    	if (err) {
				console.log(err.message);
				return;
			}
			else{
				if (result.length == 0) {
					//-2没有这个人
					res.send("-2");
					return;
				}
				var databaseMima = result[0].password;
				// 要对用户这次输入的密码进行相同的加密操作
				// 然后与数据库中的密码进行比对
				if (mima == databaseMima) {
					res.send("1");
				}
				else{
					res.send("-1");
				}
			}
			
    	});
    });
    return;
})

app.listen("3000","127.0.0.1");