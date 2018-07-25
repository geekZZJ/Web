var express = require("express");
var app = express();
var fs = require("fs");
var gm = require("gm");

app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(express.static("./picture"));

app.get("/",function(req,res,next){
	res.render("index");
})

app.get("/docut",function(req,res,next){
	//这个页面接收几个get请求参数
	//文件名x\y\w\h
	var filename = req.query.filename;
	var w = req.query.w;
	var h = req.query.h;
	var x = req.query.x;
	var y = req.query.y; 

	gm("./picture/01.jpg").crop(w,h,x,y).write("./picture/01.jpg",function(err){
		if (err) {
			res.send("-1");
			return;
		}
		else{
			res.send("1");
		}
	})
})

app.listen(3000); 