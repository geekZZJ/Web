<?php
$dbhost = '121.42.24.12:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '2461927976';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('Could not connect: ' . mysqli_error());
}
echo 'test successed!';
mysqli_close($conn);
?>