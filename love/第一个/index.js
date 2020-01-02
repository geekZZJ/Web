var express = require("express");
var app = express();
var formidable = require('formidable');
var mysql = require("mysql");

var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '2461927976',       
  port: '3306',                   
  database: 'user', 
}); 

app.set("view engine","ejs");
app.use(express.static("./public"));

app.get("/",function(req,res){
	res.render("index");
});

app.post("/copy",function(req,res,next){
	var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
    	var copy = fields.copy;

    	var addSql = "insert into copy(copy,time) values("+copy+','+'now()'+")";
    	connection.query(addSql,function(err,result){
    		if (err) {
    			console.log(err.message);
          return;
    		}
    		else if(copy == 1){
    			res.send("1");
    		}else if(copy == 0){
    			res.send("0");
    		}
    	})
    });
});

app.listen("520","121.42.24.12");