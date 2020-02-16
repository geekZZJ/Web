<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/3
 * Time: 14:35
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
mysqli_close($con);