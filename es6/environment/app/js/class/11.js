{
    //数据结构横向对比，增，查，改，删
    let map = new Map()
    let arr = []
    //增
    map.set('t',1)
    arr.push({t:1})

    console.log('map-arr',map,arr)
    //查
    let map_exist = map.has('t')
    let arr_exist = arr.find(item => item.t)

    console.log('map-arr',map_exist,arr_exist)

    //改
    map.set('t',2)
    arr.forEach(item => item.t?item.t=2:'')
    console.log('map-arr-modify',map_exist,arr_exist)

    //删除
    map.delete('t')
    let index = arr.findIndex(item => item.t)
    arr.splice(index,1)
    console.log('map-arr-empty',map,arr)
}

{
    let set = new Set()
    let arr = []
    //增
    set.add({t:1})
    arr.push({t:1})
    console.log('set-arr',set,arr)

    //查
    let set_exit = set.has({t:1})
    let arr_exist = arr.find(item => item.t)

    console.log('set-arr',set_exit,arr_exist)

    //改
    set.forEach(item=>item.t?item.t=2:'')
    arr.forEach(item => item.t?item.t=2:'')
    console.log('map-arr-modify',set,arr)

    //删
    set.forEach(item => item.t?set.delete(item):'')
    let index = arr.findIndex(item => item.t)
    arr.splice(index,1)
    console.log('map-arr-empty',set,arr)
}

{
    let item = {t:1}
    let map = new Map()
    let set = new Set()
    let obj = {}

    //增加
    map.set('t',1)
    set.add(item)
    obj['t'] = 1

    console.log('map-set-obj',map,set,obj)

    //查
    console.log({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    })

    //改
    map.set('t',2)
    item.t = 2
    obj['t'] = 2
    console.log('map-set-obj',obj,map,set)


    //删
    map.delete('t')
    set.delete(item)
    delete obj['t']

    console.log('map-set-obj',obj,map,set)
}