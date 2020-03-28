const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    console.log('req come', req.url)

    const html = fs.readFileSync('test.html', 'utf8')
    const img = fs.readFileSync('test.jpg')
    if (res.url === '/') {
        res.writeHead(200, {
            'Content-type': 'test/html',
            'Connection': 'close'
        })
        res.end(html)
    }
    else {
        res.writeHead(200, {
            'Content-type': 'image/jpg',
            'Connection': 'close'
        })
        res.end(img)
    }

}).listen(8888)

console.log('server listening on 8888')