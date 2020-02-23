(function () {
    //私有数据
    var msg = 'my atguigu'
    function doSomething() {
        console.log('doSomething()' + msg.toUpperCase())
    }
    function doOtherthing() {
        console.log('doOtherthing()'+msg.toLowerCase())
    }

    window.myModule2 = {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }
})()