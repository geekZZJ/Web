<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/18
 * Time: 19:16
 */
require_once ('../connect.php');
$id = $_GET['id'];
$deleteSql = "delete from article where id = $id";
if (mysqli_query($con,$deleteSql)){
    echo "<script>alert('删除文章成功');window.location.href = 'article.manage.php'</script>";
}else{
    echo "<script>alert('删除文章失败');window.location.href = 'article.manage.php'</script>";
}