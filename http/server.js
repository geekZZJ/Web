const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    console.log('req come', req.url)

    if (req.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8')
        res.writeHead(200, {
            'Content-type': 'text/html'
        })
        res.end(html)
    }

    if (req.url === '/script.js') {
        const etag = req.headers['if-none-match']
        if (etag === '777') {
            res.writeHead(304, {
                'Content-type': 'test/javascript',
                'Cache-Control': 'max-age=200000000,no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            })
            res.end('')
        } else {
            res.writeHead(200, {
                'Content-type': 'test/javascript',
                'Cache-Control': 'max-age=200000000,no-cache',
                'Last-Modified': '123',
                'Etag': '777'
            })
            res.end('console.log("script loaded")')
        }
    }

}).listen(8888)

console.log('server listening on 8888')