/**
 * @name: rem
 * @author: 张中俊
 * @date: 2020/5/24 16:19
 * @description：rem
 * @update: 2020/5/24 16:19
 */
(function () {
  function a () {
    var b = document.documentElement.clientWidth
    b = b > 750 ? 750 : b
    var c = b / 750 * 100
    document.getElementsByTagName('html')[0].style.fontSize = c + 'px'
  }

  a()
  window.onresize = a
})()
