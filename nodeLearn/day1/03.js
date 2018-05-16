// 这个案例简单讲解http模块
// 
// 引用模块
var http = require("http");

// 创建一个服务器，回调函数表示接收到请求之后做的事情
var server = http.createServer(function(req,res){
	//req参数表示请求，res表示响应
	// if (req.url == "/") {
	// 	res.end();
	// }
	// 
	console.log("服务器接收到了请求"+req.url);
	res.writeHead(200,{"content-type":"text/plain;charset=utf8"});
	res.write("<h2>我是2标题</h2>");
	res.write("<h3>我是3标题</h3>");
	res.end((1+2+3).toString());
	// res.write("<h3>我是3标题</h3>");
});
// 监听端口 
server.listen(3000,"127.0.0.1");