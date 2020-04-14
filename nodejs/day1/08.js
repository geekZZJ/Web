var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	var userid = parseInt(Math.random()*89999)+10000;
	console.log("欢迎"+userid);
	
	res.writeHead(200,{"content-type":"text/html;charset=utf8"});
	// 两个参数，第一个是完整路径，当前目录写./
	// 第二个参数，就是回调函数，
	fs.readFile("./public/1.txt",function(err,data){
		if (err) {
			throw err;
		}
		console.log(userid+"文件读取完毕");
		res.end(data);
	});
});

server.listen(3000,"127.0.0.1");