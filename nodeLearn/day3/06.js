var http = require("http");
var a =100;

var server = http.createServer(function (req,res) {
    a++;
    res.end(a.toString());
});

server.listen(3000,"127.0.0.1");