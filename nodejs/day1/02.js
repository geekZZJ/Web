// require表示引包，引包就是引用自己的一个特殊功能
var http = require("http");
var fs = require("fs");

// 创建服务器，参数是一个回调函数，表示如果有请求进来要做什么
var server = http.createServer(function(req,res){
	if (req.url == "/index") {
		fs.readFile("./index.html",function(err,data){
			// req表示请求，request;res表示响应，response
			// 设置http头部，状态码是200，文件类型是html,字符集是uf-8
			res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});

			// res.end("哈哈哈哈,我买了三个iphone"+(1+2+3)+"s");
			res.end(data);

		});

	}
	else if(req.url == "/yuan"){
		fs.readFile("./haha.html",function(err,data){
			// req表示请求，request;res表示响应，response
			// 设置http头部，状态码是200，文件类型是html,字符集是uf-8
			res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
			// res.end("哈哈哈哈,我买了三个iphone"+(1+2+3)+"s");
			res.end(data);
		});
	}
	else if(req.url == "/bbb.css"){
		fs.readFile("./css.css",function(err,data){
			// req表示请求，request;res表示响应，response
			// 设置http头部，状态码是200，文件类型是html,字符集是uf-8
			res.writeHead(200,{"Content-type":"text/css"});
			// res.end("哈哈哈哈,我买了三个iphone"+(1+2+3)+"s");
			res.end(data);
		});
	}
	else{
		res.writeHead(404,{"Content-type":"text/html;charset=utf-8"});
		res.end("嘻嘻，没有这个页面哟");
	}
});

//运行服务器,监听3000端口,（端口号可以任改）
server.listen(3000,"127.0.0.1");