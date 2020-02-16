//数值扩展

{
    console.log(0b1111101)   //二进制转换十进制
    console.log(0o77)   //8进制转10进制
}

{
    console.log('15',Number.isFinite(15))
    console.log('NaN',Number.isFinite(NaN))
    console.log('1/0',Number.isFinite(1/0))
    console.log('Nan',Number.isNaN(NaN))
    console.log('1',Number.isNaN(1))
}

//判断是否是整数
{
    console.log('25',Number.isInteger(25))
    console.log('25.0',Number.isInteger(25.0))
    console.log('25.1',Number.isInteger(25.1))
    console.log('25',Number.isInteger('25'))
}

{
    console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER)
    console.log(10,Number.isSafeInteger(10))
    console.log('9007199254740992',Number.isSafeInteger(9007199254740992))
}

{
    console.log(4.1,Math.trunc(4.1))    //取小数整数部分
    console.log(4.9,Math.trunc(4.9))    //取小数整数部分
}

{
    console.log(-5,Math.sign(-5))
    console.log(0,Math.sign(0))
    console.log(5,Math.sign(5))
    // console.log('foo',Math.sign(foo))
}

{
    console.log(Math.cbrt(8))   //建立立方根
}