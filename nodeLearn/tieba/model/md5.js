var crypto = require("crypto");
module.exports = function md5(mima){
	var md5 = crypto.createHash("md5");
	var password = md5.update(mima).digest("base64");
	return password;
}