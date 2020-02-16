//Promise
{
    //基本定义
    let ajax = function (callback) {
        console.log('执行')
        setTimeout(function () {
            callback&&callback.call()
        },1000)
    }
    ajax(function () {
        console.log('timeout1')
    })
}

{
    let ajax = function () {
        console.log('执行2')
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve()
            },1000)
        })
    }
    ajax().then(function () {
        console.log('promise','timeout2')
    })
}

{
    let ajax = function () {
        console.log('执行3')
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve()
            },1000)
        })
    }
    ajax().then(function () {
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve()
            },2000)
        })
    }).then(function () {
        console.log('timeout3')
    })
}

{
    let ajax = function (num) {
        console.log('执行4')
        return new Promise(function (resolve,reject) {
            if (num>5) {
                resolve()
            }else {
                throw new Error('出错了')
            }
        })
    }
    ajax(6).then(function () {
        console.log('log',6)
    }).catch(function (err) {
        console.log('catch',err)
    })

    ajax(3).then(function () {
        console.log('log',3)
    }).catch(function (err) {
        console.log('catch',err)
    })
}

{
    //所有图片加载完再加载页面
    function loaImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImg(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img)
        })
    }

    Promise.all([
        loaImg('http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853'),
        loaImg('http://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&f=JPEG?w=900&h=1350'),
        loaImg('http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290')
    ]).then(showImg)
}

{
    //有一个图片加载完就添加到页面
    function loaImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src
            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(img) {
        let p = document.createElement('p')
        p.appendChild(img)
        document.body.appendChild(p)
    }

    Promise.race([
        loaImg('http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&f=JPEG?w=1280&h=853'),
        loaImg('http://t7.baidu.com/it/u=3616242789,1098670747&fm=79&app=86&f=JPEG?w=900&h=1350'),
        loaImg('http://t8.baidu.com/it/u=3571592872,3353494284&fm=79&app=86&f=JPEG?w=1200&h=1290')
    ]).then(showImgs)
}