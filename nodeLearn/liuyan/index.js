var express = require("express");
var app = express();
// var db = require("./model/db.js");
app.set("view engine","ejs");//设置模板引擎
app.use(express.static("./public"));
var formidable = require('formidable');
var db = {};
var mysql = require("mysql");

var pool = mysql.createPool({
    host:'121.42.24.12',
    user:'root',
    password:'2461927976',
    database:'user'
});

// 显示留言列表
app.get("/",function(req,res,next){
	res.render("index");
});

app.get("/du",function(req,res,next){

    //这个页面现在接受一个page参数
    // var page = parseInt(req.query.page); // express中读取get参数很简单
    var limit = 4;

   
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields) {
        //写入数据库
        db.query2 = function (sql,callback) {
            if (!sql){
                callback();
                return;
            }
            pool.query(sql,function (err,result) {
                if (err){
                    console.log(err);

                    // 应该省略的条数
                    // var skipnum = args.pageamount*args.page;
                    // var limit = args.pageamount;

                    return;
                }
                else{
                    callback(null,result);
                }
            })
        };

        var sql1 = "select count(*) as count from liuyan";
        db.query2(sql1,function(err,result1){
            if (err) {
                res.send({"result":-1});
                return;
            }
            else{
                // console.log(result1[0].count);
                page = Math.ceil(result1[0].count/limit);
                // console.log(page);

                // var sql = "select * from liuyan order by 时间 desc limit "+ (page-1)*4 +","+limit ;
                var sql = "select * from liuyan order by time desc";
                db.query2(sql,function(err,result){
                    if (err) {
                        res.send({"result":-1});
                        return;
                    }
                    res.json({"result":result});
                });

            }
        })
    });
})

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

		

        var addsql = 'insert into liuyan(id,content,time) values(' + '\"' + fields.xingming+ '\"' + ',' + '\"' +fields.liuyan +'\"' + ','+ 'now()' +')';
        db.query1(addsql,function(err){
            if (err) {
                res.send({"result":-1});
                return;
            }
            res.json({"result":1});
        });

		console.log("收到请求了"+fields.xingming+fields.liuyan);
    });
});
 
app.listen('3000','121.42.24.12');