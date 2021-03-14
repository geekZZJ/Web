/*
 * @Author: zzj
 * @Date: 2021-03-14 12:17:48
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-14 12:24:14
 * @Description:
 */
function muti(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num);
    }, 1000);
  });
}

const nums = [1, 2, 3];

// nums.forEach(async (i) => {
//   const result = await muti(i);
//   console.log(result);
// });

(async function () {
  for (let i of nums) {
    const result = await muti(i);
    console.log(i);
  }
})();
