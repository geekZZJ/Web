<?php
    require_once ('connect.php');
    $sql = "select * from article order by datetime desc";
    $query = mysqli_query($con,$sql);
    if ($query&&mysqli_num_rows($query)){
        while ($row = mysqli_fetch_assoc($query)){
            $data[] = $row;
        }
    }
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>文章发布系统</title>
    <link href="default.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="wrapper">
    <!-- start header -->
    <div id="header">
        <div id="logo">
            <h1><a href="#">php与mysql<sup></sup></a></h1>
            <h2></h2>
        </div>
        <div id="menu">
            <ul>
                <li class="active"><a href="article.list.php">文章</a></li>
                <li><a href="about.php">关于我们</a></li>
                <li><a href="contact.php">联系我们</a></li>
            </ul>
        </div>
    </div>
    <!-- end header -->
</div>

<!-- start page -->
<div id="page">
    <!-- start content -->
    <div id="content">
        <?php
            if(empty($data)){
                echo "当前没有文章，请管理员在后台添加文章";
            }else{
                foreach($data as $value){
        ?>
        <div class="post">
            <h1 class="title"><?php echo $value['title']?><span style="color:#ccc;font-size:14px;">　　作者：<!--作者放置到这里--><?php echo $value['author']?></span></h1>
            <div class="entry">
                <?php echo $value['description']?>
            </div>
            <div class="meta">
                <p class="links"><a href="article.show.php?id=<?php echo $value['id']?>" class="more">查看详细</a>&nbsp;&nbsp;&raquo;&nbsp;&nbsp;</p>
            </div>
        </div>
        <?php
                }
            }
        ?>
    </div>
    <!-- end content -->
    <!-- start sidebar -->
    <div id="sidebar">
        <ul>
            <li id="search">
                <h2><b class="text1">Search</b></h2>
                <form method="get" action="article.search.php">
                    <fieldset>
                        <input type="text" id="s" name="key" value="" />
                        <input type="submit" id="x" value="Search" />
                    </fieldset>
                </form>
            </li>
        </ul>
    </div>
    <!-- end sidebar -->
    <div style="clear: both;">&nbsp;</div>
</div>
<!-- end page -->
<!-- start footer -->
<div id="footer">
    <p id="legal"></p>
</div>
<!-- end footer -->
</body>
</html>