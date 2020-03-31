/*
* 异步文件写入
* open 打开文件  异步调用的方法，结果都是通过回调函数参数返回的(err 错误对象  fd 文件描述符)
* */

const fs = require('fs')

fs.open('hello2.txt', 'w', function (err, fd) {
    if (!err) {
        fs.write(fd, '这是异步写入的内容', function (err) {
            if (!err) {
                console.log('写入成功')
            }
            //关闭文件
            fs.close(fd, function (err) {
                if (!err) {
                    console.log('文件关闭成功')
                }
            })
        })
    } else {
        console.log(err)
    }
})


