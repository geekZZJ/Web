var file = require("../models/file");

exports.showIndex = function (req, res) {
    // res.render("index",{
    //     "albums":file.getAllAlbms()
    // });
    file.getAllAlbms(function (err,allAlbums) {
        if (err){
            res.send(err);
            return;
        }
        res.render("index",{
            "albums":allAlbums
        });
    })
};

//相册页
exports.showAlbum = function (req, res) {
    var albumName = req.params.albumName;
    //具体业务交给model
    file.getAllImagesByAlbumName(albumName,function (err,imagesArray) {
        if (err){
            res.send(err);
            return;
        }
        res.render("album",{
            "albumname":albumName,
            "images":imagesArray
        });
    });
};

exports.showUp = function(req,res){
    //命令file模块（我们自己写的函数）调用getAllAlbums函数
    //得到所有文件夹名字之后做的事情，写在回调函数里面
    file.getAllAlbums(function(err,albums){
        res.render("up",{
            albums : albums
        });
    });
};


