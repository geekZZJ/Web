var express = require("express");
var cookieParser = require("cookie-parser");

var app = express();
app.use(cookieParser());

app.get("/",function(req,res){
	res.cookie('hobby', 'tfboys', { maxAge: 900000, httpOnly: true });
	res.send("猜你喜欢"+req.cookies.mudidi);
})

app.get("/gonglue",function(req,res){
	// 得到get请求，用户查询的目的地
	var mudidi = req.query.mudidi;
	// 记录用户喜好
	// 先读取用户的喜好，然后把形容数据push进入数组，然后设置新的coolie
	var mudidiarray = req.cookies.mudidi ||[];
	mudidiarray.push(mudidi);
	res.cookie("mudidi",mudidiarray,{ maxAge: 900000, httpOnly: true });
	res.send(mudidi+"旅游攻略");
})

app.listen("3000","127.0.0.1");