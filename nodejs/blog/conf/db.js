const env = process.env.NODE_ENV  //环境参数

//配置
let MYSQL_CONF

if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: '2461927976',
        port: '3306',
        database: 'myblog'
    }
}
if (env === 'production') {
    MYSQL_CONF = {
        host: '47.100.21.42',
        user: 'root',
        password: 'xhu-rtas-mysql',
        port: '3306',
        database: 'xhublog'
    }
}

module.exports = {
    MYSQL_CONF
}