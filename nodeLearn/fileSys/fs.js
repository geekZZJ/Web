/*
fs是核心文件，直接引入
* */
const fs = require('fs')

// console.log(fs)

/*
* 文件的写入
* openSync   打开文件
* writeSync  写入内容
* closeSync  关闭文件
* */

let fd = fs.openSync('hello.txt', "w")
fs.writeSync(fd, '今天天气真不错!!!')
fs.closeSync(fd)
