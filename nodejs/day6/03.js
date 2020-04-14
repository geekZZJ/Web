var fs = require("fs");
var gm = require('gm');

gm('./404.jpg')
.resize(50, 50)
.noProfile()
.write('./01.jpg', function (err) {
	if (err) {
		console.log(err);
	}
});