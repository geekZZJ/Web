var express = require("express");
var app = express();
// var db = require("./model/db.js");
app.set("view engine","ejs");//设置模板引擎
app.use(express.static("./public"));
var formidable = require('formidable');
var db = {};
var mysql = require("mysql");

var pool = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'2461927976',
    database:'stu'
});

// 显示留言列表
app.get("/",function(req,res,next){
	res.render("index");
});

app.post("/tijiao",function(req,res,next){
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields) {
		//写入数据库
        db.query1 = function (sql,callback) {
            if (!sql){
                callback();
                return;
            }
            pool.query(sql,function (err,result) {
                if (err){
                    console.log(err);
                    return;
                }
                callback(null,result);
            })
        };

		var sql1 = "select * from liuyan";
		db.query1(sql1,function(err,result1){
			// if (err) {
			// 	res.json("-1");
			// }
			// res.json("1");
			// console.log(result1);
			// return;
		});


        var addsql = 'insert into liuyan(姓名,留言) values(' + '\"' + fields.xingming+ '\"' + ',' + '\"' +fields.liuyan +'\"' + ')';
        db.query1(addsql,function(err){
            if (err) {
                res.json("-1");
                return;
            }
            res.json("1");
        });

		console.log("收到请求了"+fields.xingming+fields.liuyan);
    });
});
 
app.listen(3000);