var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	fs.mkdir("./album/aaa")
});

server.listen(3000,"127.0.0.1");