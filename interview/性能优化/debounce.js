/**
 * @name: debounce
 * @author: 张中俊
 * @date: 2020/5/31 22:43
 * @description：debounce
 * @update: 2020/5/31 22:43
 */
const input1 = document.getElementById("input1")
/*
let timer = null
input1.addEventListener("keyup", function () {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    console.log(input1.value)

    timer = null
  }, 1000)
})*/

// 防抖
function debounce(fn, delay = 500) {
  // timer是闭包中的
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

input1.addEventListener("keyup", debounce(() => {
  console.log(input1.value)
}), 600)