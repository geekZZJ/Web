<?php
header('content-type:text/html;charset=utf-8');
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/22
 * Time: 21:24
 */
//$mysqli = new mysqli('localhost','root','2461927976');
//print_r($mysqli);
//$mysqli->select_db('stu');

//$mysqli = new mysqli();
//$mysqli->connect('localhost','root','2461927976');
//print_r($mysqli);

//建立连接的同时打开指定的数据库
$mysqli = new mysqli('localhost','root','2461927976','stu');
//print_r($mysqli);
if ($mysqli->connect_errno){
    die('Connect Error:'.$mysqli->connect_error);
}
print_r($mysqli);
echo '<hr color="red"/>';
echo '客户端的信息:'.$mysqli->client_info;
echo $mysqli->get_client_info().'<br/>';
echo '客户端的版本:'.$mysqli->client_version.'<br/>';
echo '<hr/>';
echo '服务器端信息：'.$mysqli->server_info.'<br/>';
echo $mysqli->get_server_info();