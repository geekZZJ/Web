<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/22
 * Time: 21:12
 */
var_dump(extension_loaded('mysqli'));
var_dump(extension_loaded('curl'));
echo  '<hr/>';
//监测函数是否存在
var_dump(function_exists('mysqli_connect'));
echo '<hr/>';
//得到当前已经开启的拓展
print_r(get_loaded_extensions());
echo '<hr/>';