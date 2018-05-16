var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	// 遍历album里面的所有文件和文件夹
	fs.readdir("./album/",function(err,files){
		// files : ["0.jpg","1.jpg","aaa","bbb"];
		// files是一个存放文件（夹）名的数组
		var wenjianjia = [];
		// 迭代器就是强行把异步函数，变成同步得到函数
		// 1做完了，再做2,2做完了，再做3

		(function iterator(i){
			if (i==files.length) {
				console.log(wenjianjia);
				return;
			}
			fs.stat("./album/" + files[i], function(err,stats){
				// 检测成功之后做的事情
				if (stats.isDirectory()) {
					// 如果是文件夹，放入数组，如果不是，就什么也不做
					wenjianjia.push(files[i]);
				}
				iterator(i+1);
			});
		})(0);
	});

	res.end();
});

server.listen(3000,"127.0.0.1");