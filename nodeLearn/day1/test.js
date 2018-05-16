var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '2461927976',       
  port: '3306',                   
  database: 'stu', 
}); 
 
connection.connect();
// console.log(123);

// var addSql = 'INSERT INTO websites(ID,name,url,alexa,country)values(0,?,?,?,?)';
// var addSqlParams = ['菜鸟工具','https://c.runo ob.com','23453','CN'];
//增

var sql = 'select Id,姓名,密码,性别 from 员工表';
//查

// var modSql = 'update websites set name = ?,url = ? where id = ?';
// var modSqlParams = ['菜鸟移动站','https;//m.runoob.com',6];
//改
//
//
// var delSql = 'delete from user WHERE id = 6';
//运行时没有找到数据库，所以应该找表的名字是否错误
connection.query(sql,function (err, result) {
    if(err){
    	console.log(456);
        console.log('[select ERROR] - ',err.message);
        console.log(789);
        return;
    }
 
    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();