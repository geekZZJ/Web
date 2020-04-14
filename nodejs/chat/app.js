var express = require("express");
var app =express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var session = require('express-session');

app.set("view engine","ejs");
app.use(express.static("./public"));
var alluser = [];

//使用session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.get("/",function(req,res,next){
	res.render("index");
})

//确认登录
app.get("/check",function(req,res,next){
	var username = req.query.username;
	if (!username) {
		res.send("必须填写用户名");
		return;
	}
	if (alluser.indexOf(username) != -1) {
		res.send("用户名已经被占用");
		return;
	}
	alluser.push(username);
	req.session.username = username;
	res.redirect("/chat");
})
//聊天室
app.get("/chat",function(req,res,next){
	if (!req.session.username) {
		res.redirect("/");
		return;
	}
	res.render("chat",{
		"username":req.session.username
	});
})

io.on('connection', function(socket) {
	socket.on("liao",function(msg){
		io.emit("liao",msg);
	})
});

http.listen("4000","192.168.31.34");