var http = require("http");
var formidable = require('formidable');
var util = require("util");

var server = http.createServer(function (req,res) {
    //如果你的访问地址是这个，并且请求类型是post
    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
        var form = new formidable.IncomingForm();
        form.uploadDir = "./uploads";
        // 设置文件上传地址
        form.parse(req, function (err, fields, files) {
            if (err){
                throw err;
            }
            console.log(fields);
            console.log(files);
            console.log(util.inspect({fields: fields, files: files}));
            //所有的文本域、单选框、表单已经全部接收完毕了
            //所有的文本域，files
            res.writeHead(200,{"Content-type":"text/html;charset=utf8"});
            res.end("成功");
        });
    }
});
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
})

server.listen(3000, '127.0.0.1');