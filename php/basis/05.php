<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/13
 * Time: 19:48
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
$arr = mysqli_fetch_object($query);
//变为了属性
//print_r($arr->时间);
while ($arr = mysqli_fetch_object($query)){
    echo $arr->姓名;
    echo "<br />";
}