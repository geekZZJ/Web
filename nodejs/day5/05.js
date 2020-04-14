var express = require("express");
var app = express();
var session = require("express-session");


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
  // cookie: { secure: true }
}))

app.get("/",function(req,res){
	if (req.session.login) {
		res.send("欢迎你"+req.session.username);
	}
	else{
		res.send("你没有登陆！");
	}
})

app.get("/login",function(req,res){
	req.session.login = true;
	req.session.username = "考拉";
	res.send("你已经成功登陆");
})

app.listen("3000","127.0.0.1");