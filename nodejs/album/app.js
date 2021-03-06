var express = require("express");
var app = express();
var router = require("./controller");

app.set("view engine","ejs");

//路由中间件
//静态页面
app.use(express.static("./public"));
app.use(express.static("./uploads"));
app.get("/",router.showIndex);
app.get("/:albumName",router.showAlbum);
app.use(function (req,res) {
    res.render("err",{
        "baseurl":req.pathname
    });
});


app.listen(3000);