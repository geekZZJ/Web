//函数扩展
{
    function test(x,y = 'world') {
        console.log('默认值',x,y)
    }
    test('hello','kill')   //默认参数
}

{
    //函数作用域
    let x = 'test'
    function test2(x,y=x) {
        console.log('作用域',x,y)
    }
    test2('kill')
}

{
    function test3(...arg) {
        for (let v of arg){
            console.log('rest',v)
        }
    }

    test3(1,2,3,4,'a')
}

{
    //扩展运算符
    console.log(...[1,2,4])
    console.log('a',...[1,2,4])
}

//箭头函数
{
    let arrow = v => v * 2

    let arrow2 = () => 5
    console.log('arrow',arrow(2))
    console.log(arrow2())
}

//尾调用
{
    function tail(x) {
        console.log('tail',x)
    }
    function fx(x) {
        return tail(x)

    }
    fx(123)
}