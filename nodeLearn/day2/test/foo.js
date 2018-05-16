var msg = "你好";
var info = "呵呵";
function showinfo(){
    console.log(this);
}
exports.msg = msg;
exports.info = info;
exports.showinfo = showinfo;