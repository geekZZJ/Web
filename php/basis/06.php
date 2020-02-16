<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/13
 * Time: 19:48
 */
$con = mysqli_connect('localhost','root','2461927976');
mysqli_select_db($con,'stu');
mysqli_query($con,"set names utf8");
$sql = 'select * from liuyan';
$query = mysqli_query($con,$sql);
//输出数据有多少个
echo mysqli_num_rows($query);