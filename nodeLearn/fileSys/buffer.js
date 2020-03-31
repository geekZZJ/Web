/*
buffer中存储的都是二进制文件，但是在显示的时候都是以16进制的形式显示
一个汉字占用三个字节
* */

let str = 'hello 世界'

//将一个字符串保存到buffer中
var buffer = Buffer.from(str)

console.log(buffer)
// console.log(str.length)
// console.log(buffer.length)

/*
创建一个10个字节的buffer
* */
let buffer2 = Buffer.alloc(10)
//通过索引，来操作buffer中的元素
buffer2[0] = 88
buffer2[1] = 255
console.log(buffer2)

// 只要数字在控制台或页面中输出一定是10进制
console.log(buffer2[1].toString(2))