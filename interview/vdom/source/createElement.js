function createElement(vnode) {
    var tag = vnode.tag
    var attrs = vnode.attrs || {}
    var children = vnode.children || []
    if (!tag) {
        return null
    }

    //创建元素
    var elem = document.createElement(tag)
    //属性
    var attrName
    for (attrName in attrs) {
        if (attrs.hasOwnProperty(attrName)) {
            //给elem添加属性
            elem.setAttribute(attrName,attrs[attrName])
        }
    }
    //子元素
    children.forEach(function (childVnode) {
        //给elem添加子元素
        elem.appendChild(createElement(childVnode)) //递归

    })
    //返回真实的DOM元素
    return elem
}