var http=require('http');
//get 请求外网
for (var i=0;i<10;i++) {
    http.get('http://jwc.xhu.edu.cn:80', function (req, res) {
        var html = '';
        req.on('data', function (data) {
            html += data;
        });
        req.on('end', function () {
            console.info(html);
        });
    });
}