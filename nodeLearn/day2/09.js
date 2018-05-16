var ejs = require("ejs");

var string = "好高兴啊，今天我买了iphone<%=a%>s";

var data = {
    a:6
};
//数据绑定
var html = ejs.render(string,data);
//输出
console.log(html)