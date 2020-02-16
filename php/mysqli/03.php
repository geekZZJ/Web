<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/23
 * Time: 16:12
 */
$mysqli = new mysqli('localhost','root','2461927976','stu');
if ($mysqli->connect_errno){
    die('Connect Error:'.$mysqli->connect_error);
}

$mysqli->set_charset('utf8');

$sql =<<<EOF
    CREATE TABLE IF NOT EXISTS mysqli(
      id TINYINT UNSIGNED AUTO_INCREMENT KEY,
      username VARCHAR(20) NOT NULL 
    );
EOF;
$res = $mysqli->query($sql);
var_dump($res);
