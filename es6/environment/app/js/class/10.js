//set和map
{
    let list = new Set()
    list.add(5)
    list.add(7)

    console.log('size',list.size)
}

{
    let arr = [1,2,3,4,5,6]
    let list = new Set(arr)
    console.log('size',list.size)
}

{
    let list = new Set()
    list.add(1)
    list.add(2)
    list.add(1)

    console.log('list',list)

    let arr = [1,2,3,1,2]
    let list2 = new Set(arr)
    console.log('unique',list2)   //set可以用于去重
}

{
    let arr = ['add','delete','clear','has']
    let list = new Set(arr)
    console.log('has',list.has('add'))
    console.log('delete',list.delete('add'),list)
    list.clear()
    console.log('list',list)
}

{
    let arr = ['add','delete','clear','has']
    let list = new Set(arr)
    for (let key of list.keys()) {
        console.log('keys',key)
    }
    for (let key of list.values()) {
        console.log('keys',key)
    }
    for (let key of list) {
        console.log('keys',key)
    }
    for (let [key,value] of list.entries()) {
        console.log('keys',key,value)
    }
    list.forEach(function (item) {
        console.log(item)
    })
}

{
    let weakList = new WeakSet()
    let arg = {}
    weakList.add(arg)
    console.log('weakList',weakList)
}

{
    let map = new Map()
    let arr = ['123']
    map.set(arr,456)
    console.log('map',map,map.get(arr))
}

{
    let map = new Map([['a',132],['b',456]])
    console.log("map",map)
    console.log('size',map.size)
    console.log('delete',map.delete('a'),map)
    console.log('clear',map.clear(),map)
}

{
    let weakMap = new WeakMap()
    let o = {}
    weakMap.set(o,123)
    console.log(weakMap.get(o))
}