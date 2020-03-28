const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    console.log('req come', req.url)

    const host = request.headers.host

    if (req.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8')
        if (host === 'a.test.com') {
            res.writeHead(200, {
                'Content-type': 'text/html',
                'Set-Cookie': ['id=123;max-age=2','abc=456;HttpOnly']
            })
        }
        res.end(html)
    }

}).listen(8888)

console.log('server listening on 8888')