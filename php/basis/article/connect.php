<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/18
 * Time: 19:12
 */
require_once('config.php');
//连库
if (!($con = mysqli_connect(HOST,USERNAME,PASSWORD))){
  echo mysqli_error($con);
}
//选库
if (!mysqli_select_db($con,'stu')){
    echo mysqli_error($con);
}
//字符集
if (mysqli_query($con,'set names utf8')){
    echo mysqli_error($con);
}