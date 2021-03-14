/*
 * @Author: zzj
 * @Date: 2021-03-14 11:49:10
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-14 12:12:38
 * @Description:
 */
async function async1() {
  console.log("async1 start"); // 2
  await async2();
  // 下面三步是异步回调的内容
  console.log("async1 end"); // 5
  await async3();
  // 下面一行是异步回调的内容
  console.log("async end2"); // 7
}

async function async2() {
  console.log("async2"); // 3
}

async function async3() {
  console.log("aynnc3"); // 6
}

console.log("script start"); // 1
async1();
console.log("script end"); // 4
