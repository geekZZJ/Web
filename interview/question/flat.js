/**
 * @name: flat
 * @author: 张中俊
 * @date: 2020/6/2 22:56
 * @description：flat
 * @update: 2020/6/2 22:56
 */
function flat(arr) {
  //验证arr中，还有没有深层数组
  const isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) {
    return arr
  }
  const res = Array.prototype.concat.apply([], arr)
  return flat(res)
}

const res = flat([1, 2, [3, 4, [7]], 5])
console.log(res)