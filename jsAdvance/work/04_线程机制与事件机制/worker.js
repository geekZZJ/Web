function fibonacci(number) { //递归调用
    //1 1 2 3 5 8
    return number<=2 ? 1 : fibonacci(number-2) + fibonacci(number-1)
}
console.log(this)
var onmessage = function (event) {
    var number = event.data
    console.log('分线程接收到主线程发送数据' + number)
    //计算
    var result = fibonacci(number)
    postMessage(result)
    console.log('分线程向主线程返回数据:' + result)
    // alert是window的方法，在分线程不能调用
    // 分线程中的全局对象不是window
}