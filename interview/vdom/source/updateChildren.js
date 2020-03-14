function updateChildren(vnode,newVnode) {
    var children = vnode.children || []
    var newChildren = newVnode.children || []
    children.forEach(function (childVnode,index) {
        var newChildVnode = newChildren[index]
        if (childVnode.tag === newChildVnode.tag) {
            //深层次对比
            updateChildren(childVnode,newChildVnode)
        }else {
            //替换
            replaceNode(childVnode,newChildVnode)
        }
    })
}

function replaceNode() {
    var elem = vnode.elem
    var newElem = createElement(newVnode)
    //替换
}