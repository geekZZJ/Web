/*
 * @Author: zzj
 * @Date: 2021-03-14 12:42:07
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-14 12:43:29
 * @Description:
 */
console.log(100);
setTimeout(() => {
  console.log(200);
});

Promise.resolve().then(() => {
  console.log(300);
});
console.log(400);
