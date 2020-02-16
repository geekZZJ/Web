var ejs = require("ejs");
var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req,res) {
    fs.readFile("./views/index.ejs",function (err,data) {
        var template = data.toString();
        var dictionary = {a:6};
        var html = ejs.render(template,dictionary);
        res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
        res.end(html);
    });
});

server.listen(4000,"127.0.0.1");
