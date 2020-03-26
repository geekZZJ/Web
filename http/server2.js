const http = require('http')

http.createServer(function (req, res) {
    console.log('req come', req.url)

    res.writeHead(200, {
        'Access-Control-Allow-Origin': 'http://127.0.0.1:8888',
        'Access-Control-Allow-Headers': 'X-Test_Cors',
        'Access-Control-Allow-Methods': 'POST,PUT,DELETE',
        'Access-Control-Max-Age': '1000'
    })
    res.end('123')

}).listen(8887)

console.log('server listening on 8887')