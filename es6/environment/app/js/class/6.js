//数组扩展
{
    let arr = Array.of(1,2,3,4,5,6)
    console.log('arr=',arr)

    let empty = Array.of()
    console.log('empty',empty)
}

{
    let p = document.querySelectorAll('p')
    let pArr = Array.from(p)
    pArr.forEach(function (item) {
        console.log(item.textContent)
    })

    console.log(Array.from([1,2,3],function (item) {
        return item*2
    }))
}

{
    console.log('fill-7',[1,'a',undefined].fill(7))
    console.log('fill,pos',['a','b','c'].fill(7,0,2))   //7表示替换之后的内容，0表示从0开始，2表示要替换的长度
}

{
    for (let index of ['1','c','kc'].keys()){
        console.log('keys',index)
    }
    for (let value of ['1','c','kc'].values()){
        console.log('keys',value)
    }
    for (let [index,value] of ['1','c','kc'].entries()){
        console.log('index,value',index,value)
    }
}

{
    console.log([1,2,3,4,5,6].copyWithin(0,3,6))   //从0位置开始替换,3为数组开始的位置,6位到第6个结束
}

//find找出满足第一个大于3的数的值,findIndex为第一个大于3的下标
{
    console.log([1,2,3,5,5,6].find(function (item) {
        return item>3
    }))
    console.log([1,2,3,5,5,6].findIndex(function (item) {
        return item>3
    }))
}

{
    console.log('number',[1,2,NaN].includes(1))
}