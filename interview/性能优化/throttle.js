/**
 * @name: throttle
 * @author: 张中俊
 * @date: 2020/5/31 23:05
 * @description：throttle
 * @update: 2020/5/31 23:05
 */
const div1 = document.getElementById("div1")

/*
let timer = null
div1.addEventListener("drag", function (e) {
  if (timer) {
    return
  }
  timer = setTimeout(() => {
    console.log(e.offsetX, e.offsetY)
    timer = null
  }, 500)
})*/

function throttle(fn, delay = 100) {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

div1.addEventListener("drag", function (e) {
  console.log(e.offsetX, e.offsetY)
}, 200)