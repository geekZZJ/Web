<?php 
	header("Content-type:text/html;charset=utf-8");
	if ($con = mysql_connect('localhost','root','')) {
		echo "连接成功";
	}else{
		echo "连接失败";
	}
	if (mysql_select_db('test')) {
		echo "选择数据库成功";
	}else{
		echo "选择数据库失败";
	}
	mysql_query('set names utf8');
	if (mysql_query('insert into stu(sno,sname) values(4,"李四")')) {
		echo "插入成功";
	}else{
		echo mysql_error();
		echo "插入失败";
	}
	mysql_close($con);
 ?>