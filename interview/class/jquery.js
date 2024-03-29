class jQuery {
    constructor(selector) {
        const result = document.querySelectorAll(selector)
        const length = result.length
        for (let i = 0; i < length; i++) {
            this[i] = result[i]
        }
        this.length = length
        this.selector = selector
    }

    get(index) {
        return this[index]
    }

    each(fn) {
        for (let i = 0; i < this.length; i++) {
            const elem = this[i]
            fn(elem)
        }
    }

    on(type, fn) {
        return this.each(elem => {
            elem.addEventListener(type, fn, false)
        })
    }
}

//插件
jQuery.prototype.dialog = function (info) {
    console.log(info)
}

//造轮子
class myJQuery extends jQuery {
    constructor(selector) {
        super(selector)
    }

    //扩展自己的方法
    addClass(className) {

    }
}

// const $p = new jQuery('p')
// $p.get(1)
// $p.each(ele => {
//     console.log(ele)
// })
// $p.on('click', () => {
//     alert('clicked')
// })