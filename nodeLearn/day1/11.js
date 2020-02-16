var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	// 储存所有文件夹
	var wenjianjia = [];
	// stat检测状态
	fs.readdir("./album",function(err,files){
		console.log(files);
		// files是个数组，表示./album这个文件夹中的所有东西
		// 包括文件和文件夹
		for (var i = 0; i < files.length; i++) {
			var thefilename = files[i];
			// console.log(thefile);
			// 又要进行一次检测 
			fs.stat("./album/"+thefilename,function(err,stats){
				if (stats.isDirectory()) {
					wenjianjia.push(thefilename);
				}
				console.log(wenjianjia);
			})
		}

	});
});

server.listen(3000,"127.0.0.1");