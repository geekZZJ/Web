<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/18
 * Time: 19:16
 */
require_once ('../connect.php');
$deleteSql = 'delete from article where id = 2';
if (mysqli_query($con,$deleteSql)){
    echo "<script>alert('删除文章成功');</script>";
}else{
    echo "<script>alert('删除文章失败');</script>";
}