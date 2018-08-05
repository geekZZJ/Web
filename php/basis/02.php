<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/4
 * Time: 16:08
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
$name = '张四';
$liuyan = '123456789';
$sql = "insert into liuyan"."(姓名,留言)"."values"."('$name','$liuyan')";
if (mysqli_query($con,$sql)){
    echo "插入成功";
}else{
    mysqli_error($con);
    echo "插入失败";
}
mysqli_close($con);