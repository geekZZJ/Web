<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/5
 * Time: 11:30
 */
if ($con = mysqli_connect('localhost','root','2461927976')){
    echo "连接成功";
}else{
    echo "连接失败";
}
if (mysqli_select_db($con,'stu')){
    echo "选择数据库成功";
}else{
    echo "选择数据库失败";
}
mysqli_query($con,"set names utf8");
$sql = 'select * from liuyan';
$query = mysqli_query($con,$sql);
while ($row = mysqli_fetch_row($query)){
    echo "<br/>姓名:$row[0],留言:$row[1]";
}