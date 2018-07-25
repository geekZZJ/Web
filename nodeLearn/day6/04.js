var fs = require("fs");
var gm = require("gm");

gm("./404.jpg").crop(310,152,722,270).write("./02.jpg",function(err){

})