/**
 * @name: lesson2-4
 * @author: 张中俊
 * @date: 2020/5/26 11:58
 * @description：lesson2-4
 * @update: 2020/5/26 11:58
 */
// 函数默认值
/*
function f (x = 1, y = 2, z = 3) {
  return x + y + z
} */

/* function sum () {
  let num = 0
  // es5
  /!* Array.prototype.forEach.call(arguments, function (item) {
    num += item * 1;
  }) *!/
  // es6
  Array.from(arguments).forEach(function (item) {
    num += item * 1
  })
  return num
} */
function sum (base, ...nums) {
  let num = 0
  nums.forEach(function (item) {
    num += item * 1
  })
  return base * 2 + num
}

console.log(sum(1, 2, 3, 5))
