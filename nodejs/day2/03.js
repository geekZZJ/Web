var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");


var server = http.createServer(function(req,res){
	// 这里如果不用req.url来if判断，
	// 那么用户不管输入什么网址，做的事情都一样
	//把文件读出来 
	//
	var pathname = url.parse(req.url).pathname;
	if (pathname.indexOf(".")==-1) {
		pathname+="/haha.html";
	}

	var fileURL = "./" + path.normalize("./static/" + pathname);

	var extname = path.extname(pathname);
	fs.readFile(fileURL,function(err,data){
		if (err) {
			// 读完之后做的事情
			res.writeHead(200,{"content-type":"text/html;charset=utf8"});
			res.end("404，页面不存在");
		}
		// 读完之后做的事情
		getMine(extname,function(mime){
			res.writeHead(200,{"content-type":mime});
			res.end(data);
		});
	});
});

server.listen(3000,"127.0.0.1");

function getMine(extname,callback){
	//读取mime.json文件，得到json，根据extname key , 返回对应的value
	//读取文件
	fs.readFile("./mime.json",function(err,data){
		if (err) {
			throw Error("找不到mime.json文件！");
			return;
		}
		//转成json
		var mimeJSON = JSON.parse(data);
		var mime = mimeJSON[extname] || "text/plain";
		//执行回调函数,mime类型字符串，就是它的参数
		callback(mime);
	});
}