/*
 * @Author: zzj
 * @Date: 2020-06-02 22:56:47
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-19 22:14:43
 * @Description:
 */
function flat(arr) {
  //验证arr中，还有没有深层数组
  const isDeep = arr.some((item) => item instanceof Array);
  if (!isDeep) {
    return arr;
  }
  const res = Array.prototype.concat.apply([], arr);
  return flat(res);
}

const res = flat([1, 2, [3, 4, [7]], 5]);
console.log(res);
