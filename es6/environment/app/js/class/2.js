//数组解构赋值
{
    let a,b,rest
    [a,b] = [1,2]
    console.log(a,b)
}


{
    let a,b,rest
    [a,b,...rest] = [1,2,3,4,5,6]
    console.log(a,b,rest)
}

//对象解构赋值
{
    let a,b
    ({a,b}={a:1,b:2})
    console.log(a,b)
}


//应用：交换变量
{
    let x = 1;
    let y = 2;
    [x,y] = [y,x]
    console.log(x,y)
}

//应用
{
    function f() {
        return [1,2]
    }
    let a,b
    [a,b] = f()
    console.log(a,b)
}

//应用:选择性接收变量
{
    function f1() {
        return [1,2,3,4,5]
    }
    let a,b,c
    [a,,,b] = f1()
    console.log(a,b)
}

//应用：其他被...b接收

{
    function f2() {
        return [1,2,3,4,5]
    }
    let a,b,c
    [a,...b] = f2()
    console.log(a,b)
}

{
    let o = {
        p:42,
        q:true
    }
    let {p,q} = o
    console.log(p,q)
}

{
    let {a=10,b=5} = {a:3}
    console.log(a,b)
}

//应用：在json上应用
{
    let metData = {
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]} = metData
    console.log(esTitle,cnTitle)
}