/**
 * @name: lesson-
 * @author: 张中俊
 * @date: 2020/5/25 22:52
 * @description：lesson-
 * @update: 2020/5/25 22:52
 */
// Array.of()
/*let arr = Array.of(1,2,3,4,5,6)
console.log(arr)*/

// Array.prototype.fill()
/*
let arr = new Array(7).fill(1)
console.log(arr)*/

// Array.prototype.fill(value,start,end)
// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.fill(8, 2, 4))

let arr = [1, 2, 3, 4, 5, 6]
/*
let find = arr.filter((item) => {
  return item === 7
})
console.log(find)*/
/*let find = arr.find((item) => {
  return item % 6 === 0
})
console.log(find)*/
let find = arr.findIndex((item) => {
  return item % 2 === 0
})
console.log(find)
