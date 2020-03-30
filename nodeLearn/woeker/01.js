var express = require("express");
var app = express();
app.set("view engine","ejs");
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

app.get("/",function(req,res,next){
	res.render("index");
});

app.post("/tijiao",function(req,res,next){
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields) {
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
        var sql1 = "select * from 员工表";
        db.query1(sql1,function(err,result1){
        	// if (err) {
        	// 	res.json("-1");
        	// }
        	// res.json("1");
        	console.log(result1);
        	return;
        });

        var addsql = 'insert into 员工表(ID,姓名,性别,密码,自我介绍) values(' + fields.id +','+ '\"' + fields.xingming+ '\"' + ',' + '\"' +fields.xingbie +'\"'+',' +'\"'+fields.mima+'\"'+','+'\"'+fields.jieshao+'\"'+ ')';
        db.query1(addsql,function(err){
            if (err) {
                res.json("-1");
                return;
            }
            res.json("1");
        });

        console.log("收到请求了"+fields.id+fields.xingming+fields.xingbie+fields.mima+fields.jieshao);
	});
})

app.listen("3000");