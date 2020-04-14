let fs = require('fs')

fs.writeFile('hello3.txt','这是writeFile',function (err) {
    if (!err) {
        console.log('写入成功')
    }
})