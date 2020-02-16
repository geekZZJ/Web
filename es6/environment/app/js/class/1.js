function test() {
    for (let i=1;i<3;i++){
        console.log(i)
    }
    // console.log(i)
}

// test()

//块作用域，不能重复申明一个变量

function last() {
    const PI = 3.1415926   //常变量
    // PI = 8
    const k={
        a:1
    }
    k.b = 3
    console.log(PI,k)
}

last()