<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/13
 * Time: 19:59
 */
$con = mysqli_connect('localhost','root','2461927976');
mysqli_select_db($con,'stu');
mysqli_query($con,"set names utf8");
$sql = 'select * from liuyan';
$query = mysqli_query($con,$sql);
