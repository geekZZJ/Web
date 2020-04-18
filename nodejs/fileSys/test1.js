const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'hello.txt')
console.log(fileName)

//读取文件内容
/*fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data.toString())
})*/

//写入文件
const content = '这是新写入的内容\n'
const opt = {
    flag: 'a'
}
fs.writeFile(fileName, content, opt, (err) => {
    if (err) {
        console.error(err)
    }
})