/**
 * IIFE模式增强 : 引入依赖
 * 这就是现代模块实现的基石
 */

(function (window,$) {
    let msg = 'module4'
    function foo() {
        console.log('foo()',msg)
    }
    window.module4 = foo
    $('body').css('background','red')
})(window,jQuery)