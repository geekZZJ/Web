var http = require("http");
var url = require("url");
var fs = require("fs");
var path = require("path");

http.createServer(function(req,res){
	// 得到用户的路径
	// 
	var pathname = url.parse(req.url).pathname;
	// 默认首页
	if (pathname == "/") {
		pathname = "login.html";
	}
	// 拓展名
	var extname = path.extname(pathname);
	console.log(extname);
	// 真的读取这个文件
	fs.readFile("./public/"+pathname,function(err,data){
		if (err) {
			// 如果此文件不存在，就应该用404返回
			fs.readFile("./public/demo4.html",function(err,data){
				res.writeHead(404,{"content-type":"text/html;charset=utf8"});
				res.end(data);
			});
			return;
		};
		var mime =getMine(extname);
		res.writeHead(200,{"content-type":mime})
		res.end(data);
	});

}).listen(3000,"127.0.0.1"); 


function getMine(extname){
	switch (extname) {
		case ".html":
			return "text/html";
			break;
		case ".jpg":
			return "image/jpg";
			break;
			case ".css":
			return "text/css";
			break;
	}
}