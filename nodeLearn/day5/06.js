var express = require("express");
var app = express();
var mysql = require("mysql");
var session = require("express-session");


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
  // cookie: { secure: true }
}));

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'2461927976',
	port:'3306',
	database:'stu',
});


app.set("view engine","ejs");


app.get("/",function(req,res){
	if (req.session.login) {
		res.send("欢迎你"+req.session.username);
	}
	else{
		res.send("你没有登陆！");
	}
});

app.get("/login",function(req,res){
	res.render("login");
});

app.get("/checklogin",function(req,res){
	var postusername = req.query.username;
	var postpassword  = req.query.password;
	var sql = "select * from user where name=" + '\"' + postusername + '\"';
	connection.query(sql,function(err,result){
		if (err) {
			console.log(err.message);
			return;
		}
		else{
			if (result.length == 0) {
				res.send("用户名错误，请重新填写");
				return;
			}
			var getpsd = result[0].tel;
			if (getpsd == postpassword) {
				req.session.login = true;
				req.session.username = result[0].name;
				res.send("登陆成功,你是"+result[0].name);
			}
			else{
				res.send("密码错误！");
			}
		}
	})
})

app.listen("3000","127.0.0.1");