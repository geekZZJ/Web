<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/24
 * Time: 16:00
 */
header('content-type:text/html;charset=utf-8');
$mysqli = new mysqli('localhost','root','2461927976','stu');
if ($mysqli->connect_error){
    die('connect error:'.$mysqli->connect_error);
}
$mysqli->set_charset('utf8');

//执行sql查询
//添加记录
$sql = "INSERT mysqli(id,username) VALUES(1,'king');";
$res = $mysqli->query($sql);
if ($res){
    echo '恭喜你注册成功，你是网站的第'.$mysqli->insert_id.'位用户<br/>';
    echo '有'.$mysqli->affected_rows.'记录被影响';
}else{
    echo "error".$mysqli->errno.':'.$mysqli->error;
}