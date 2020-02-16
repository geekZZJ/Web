<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/18
 * Time: 19:13
 */
require_once ('../connect.php');
//把传递过来的信息入库,在入库之前对所有信息进行校验
if (!(isset($_POST['title'])&&(!empty($_POST['title'])))){
    echo "<script>alert('标题不能为空');window.location.href = 'article.add.php'</script>";
}
$title = $_POST['title'];
$author = $_POST['author'];
$description = $_POST['description'];
$content = $_POST['content'];
$dateline = time();
$insertSql = "insert into article(title,author,description,content,datetime) values('$title','$author','$description','$content',$dateline)";
if (mysqli_query($con,$insertSql)){
    echo "<script>alert('发布文章成功');window.location.href = 'article.add.php'</script>";
}else{
    echo "<script>alert('发布失败');window.location.href = 'article.add.php'</script>";
}