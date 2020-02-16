var http = require("http");
var querystring = require("querystring");

var server = http.createServer(function (req,res) {
    //如果你的访问地址是这个，并且请求类型是post
    if (req.url == "/dopost" && req.method.toLowerCase() == "post");
    var alldata = "";
    //下面是post请求接收的一个公式
    //node为了追求极致，它是一个小段一个小段接收到的
    req.addListener("data",function (chunk) {
        alldata += chunk;
        console.log(chunk);
    });
    //全部传输完毕
    req.addListener("end",function () {
        var datastring = alldata.toString();
        res.end("success");
        //将datastring转化为对象
        var dataobj = querystring.parse(datastring);
        console.log(dataobj);
        console.log(dataobj.name);
        console.log(dataobj.sex);
        console.log(dataobj.hobby);
        console.log(dataobj.age);
        console.log(dataobj.tel);
    })
});
server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
})

server.listen(3000, '127.0.0.1');