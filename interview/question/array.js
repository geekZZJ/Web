/**
 * @name: array
 * @author: 张中俊
 * @date: 2020/6/1 22:31
 * @description：array
 * @update: 2020/6/1 22:31
 */

const arr = [10, 20, 30, 40]

//会改变原数组
/*const popRes = arr.pop()
console.log(popRes, arr)*/

//会改变原数组，返回数组长度
/*const pushRes = arr.push(50)
console.log(pushRes, arr)*/


//返回数组长度，改变原数组
/*
const unshiftRes = arr.unshift(5)
console.log(unshiftRes, arr)*/

//返回数组中的第一个，改变原数组
/*
const shiftRes = arr.shift()
console.log(shiftRes, arr)*/


// 纯函数，不改变原数组，返回一个数组
// arr.concat()
// arr.map()
// arr.filter()
// arr.slice()


// 非纯函数
// push pop shift unshift
// forEach
// some every
// reduce