// import util1 from './util1.js'
// import {fn1, fn2} from './util2.js'
//
// console.log(util1)
// fn1()
// fn2()

// [1,2,3].map(item => item + 1)

import 'babel-polyfill'
function loadImg(src) {
    var promise = new Promise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject('图片加载失败')
        }
        img.src = src
    })
    return promise
}

var src1 = 'https://www.baidu.com/img/bd_logo1.png'
var src2 = 'http://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg'

const load = async function () {
    const result1 = await loadImg(src1)
    console.log(result1)
    const result2 = await loadImg(src2)
    console.log(result2)
}
load()