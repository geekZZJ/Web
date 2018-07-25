var express = require("express");
var app = express();
var formidable = require('formidable');
var mysql = require("mysql");
var md5 = require("./model/md5.js");
var session = require('express-session');
var svgCaptcha = require('svg-captcha');
var path = require("path");
var fs = require("fs");
var gm = require("gm");


var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '2461927976',       
  port: '3306',                   
  database: 'stu', 
}); 


app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(express.static("./headPic"));

//使用session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


app.get("/",function(req,res){
	res.render("index",{
    "login":req.session.login == "1" ?true:false,
    "username":req.session.login == "1" ?req.session.username:"",
    // "headPic":headPic
    "tiezi":req.session.login == "1" ?req.session.tiezi:"",
  });
});

app.get("/regist",function(req,res){
	res.render("regist");
})

app.get("/login",function(req,res){
  res.render("login");
})

app.post("/doregist",function(req,res,next){
	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
    	var username = fields.username;
    	var sex = fields.sex;
    	var email = fields.email;
    	var password = fields.password;
    	// var headPic = fields.sex;


    	// 加密
    	password = md5(md5(password).substr(4,7)+md5(password));

      //查询数据库中是否已经有这个人
      var searchSql = "select * from tiebaUser where username="+'\"'+username+'\"';
      connection.query(searchSql,function(err,result){
        if (err) {
          console.log(err.message);
          res.send("-3");
          //服务器错误
          return;
        }
        else{
          if (result.length != 0) {
            res.send("-1")
            //用户名被占用
            return;
          }
          else{
            //把用户数据放入数据库
            var addSql = "insert into tiebaUser(username,sex,email,password,headPic) values("+'\"'+username+'\"'+","+'\"'+sex+'\"'+","+'\"'+email+'\"'+","+'\"'+password+'\"'+","+'\"man.jpg\"'+")";
            connection.query(addSql,function(err,result){
              if (err) {
              console.log(err.message);
              res.send("-3");
              return;
              }
              else{
                req.session.login = "1";
                req.session.username = username;
                req.session.id1 = "重新登录后获得";
                req.session.sex = sex;
                req.session.email = email;
                req.session.headPic = "man.jpg";
                req.session.tiezi = "";
                res.send("1");
              }
            });
          }
        }
      });


    });
});

app.get('/captcha', function (req, res) {
    var captcha = svgCaptcha.create();
    req.session.captcha = captcha.text;
    
    res.type('svg');
    res.status(200).send(captcha.data);
});


app.post("/dologin",function(req,res,next){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    var username = fields.username;
    var password = fields.password;
    var confirm = fields.confirm;
    var state = false;

    console.log(req.session.captcha);
    console.log(confirm);
    if (confirm == req.session.captcha) {
      state = true;
    }else{
      state = false;
      res.send("-3");
      return;
    }

    //产生验证码
    // var captcha = svgCaptcha.create();
    // req.session.captcha = captcha.text;
    // res.type('svg');
    // res.status(200).send(captcha.data);
    // if (req.session.captcha == confirm) {
    //   res.send("-4");
    // }

    //加密
    password = md5(md5(password).substr(4,7)+md5(password));

    //查询数据库
    var searchSql = "select * from tiebaUser where username="+'\"'+username+'\"';
    connection.query(searchSql,function(err,result){
      if (err) {
        console.log(err.message);
        res.send("2");
        //服务器错误
        return;
      }
      else{
        if (result.length == 0) {
          res.send("-1");
          //用户名不存在
          return;
        }
        else if (password != result[0].password) {
          res.send("-2");
          //密码错误
          return;
        }
        else if (password == result[0].password) {
          req.session.login = "1";
          req.session.username = username;
          req.session.id1 = result[0].id;
          req.session.sex = result[0].sex;
          req.session.email = result[0].email;
          req.session.headPic = result[0].headPic;
          var searT = "select * from tiebaTiezi where username="+'\"'+username+'\"';
          connection.query(searT,function(err,result2){
            if (err) {
              console.log(err.message);
              res.send("7");
              return;
              //查找帖子错误
            }
            else{
              console.log(result2);
              req.session.tiezi = result2;
              res.send("1");
              //密码正确
            }
          })
        }
      }
    })

  });
})

//上传头像
app.post('/setHeadPic',function(req,res,next){
  console.log(123456);
  var form = new formidable.IncomingForm();
  form.uploadDir = path.normalize(__dirname+"/headPic/");
  form.parse(req, function(err, fields, files) {
    var oldpath = files.headPic.path;
    var newpath = path.normalize(__dirname+"/headPic/")+req.session.username+".jpg";
    fs.rename(oldpath,newpath,function(err){
      if (err) {
        res.send("失败");
        return;
      }
      req.session.headPic = req.session.username+".jpg";
      //跳转到切图的业务
      res.redirect("/cut");
    })
  });
})

//显示切图页面
app.get("/cut",function(req,res){
  console.log(req.session.headPic);
  res.render("cut",{
    headPic : req.session.headPic
  })
})

app.get("/docut",function(req,res,next){
  var filename = req.session.headPic;
  var w = req.query.w;
  var h = req.query.h;
  var x = req.query.x;
  var y = req.query.y;


  gm("./headPic/"+filename)
    .crop(w,h,x,y)
    .resize(100,100,"!")
    .write("./headPic/"+filename,function(err){
      if (err) {
        res.send(err.message);
        return;
      }
      //更新数据库
      var modSql = "update tiebaUser set headPic="+'\"'+req.session.headPic+'\"'+"where username="+'\"'+req.session.username+'\"';
      connection.query(modSql,function(err,result){
        if (err) {
        console.log(err.message);
        res.send("-3");
        return;
        }
        else{
          res.send("1");
        }
      });
    });
})

app.get("/pcenter",function(req,res){
  if (req.session.login != 1) {
    res.writeHead(200,{"Content-type":"text/html;charset=utf8"});
    res.end("非法闯入，这个页面要求登录");
    return;
  }
  res.render("pcenter",{
    "login":req.session.login == "1" ?true:false,
    "username":req.session.login == "1" ?req.session.username:"",
    "id1":req.session.login == "1"?req.session.id1:"",
    "sex":req.session.login == "1"?req.session.sex:"",
    "email":req.session.login == "1"?req.session.email:"",
    "headPic":req.session.login == "1"?req.session.headPic:"",
  });
})

app.post("/published",function(req,res,next){
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    var username = req.session.username;
    var title = fields.title;
    var abstract = fields.abstract;
    var content = fields.content;
    var state = false;

    var addSql = "insert into tiebaTiezi(username,title,time,content,abstract) values("+'\"'+username+'\"'+","+'\"'+title+'\"'+","+'now()'+","+'\"'+content+'\"'+","+'\"'+abstract+'\"'+")";
    connection.query(addSql,function(err,result){
      if (err) {
        console.log(err.message);
        res.send("2");
        //服务器错误
        return;
      }
      else{
        var searT = "select * from tiebaTiezi where username="+'\"'+username+'\"';
        connection.query(searT,function(err,result2){
          if (err) {
            console.log(err.message);
            res.send("-1");
            return;
            //查找帖子错误
          }
          else{
            console.log(result2);
            req.session.tiezi = result2;
            res.send("1");
            //发表成功
          }
        })
        // res.send("1");
      }
    });
  });
});


app.listen("4000","127.0.0.1");