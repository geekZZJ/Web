var AipNlpClient = require("baidu-aip-sdk").nlp

// 设置APPID/AK/SK
var APP_ID = "19452574"
var API_KEY = "S8nlefUHuoc7bsmPGxW88BLA"
var SECRET_KEY = "4F69EGP9FKRybzHGvTdH0HjtHluvIwc8"

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipNlpClient(APP_ID, API_KEY, SECRET_KEY)

module.exports = {
    client
}