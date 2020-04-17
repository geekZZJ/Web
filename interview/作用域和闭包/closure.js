//函数作为返回值
/*function create() {
    let a = 100
    return function () {
        console.log(a)
    }
}
let fn = create()
let a = 200
fn() //100*/

//函数作为参数被传递
function print(fn) {
    let a = 200
    fn()
}
let a =100
function fn() {
    console.log(a)
}
print(fn) //100