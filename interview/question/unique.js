/**
 * @name: unique
 * @author: 张中俊
 * @date: 2020/6/2 23:06
 * @description：unique
 * @update: 2020/6/2 23:06
 */

/**
 * 传统方式去重
 * @param arr
 * @returns {Array}
 */

/*function unique(arr) {
  const res = []
  arr.forEach(item => {
    console.log(item)
    if (res.indexOf(item) < 0) {
      res.push(item)
    }
  })

  return res
}*/

/**
 * set方式去重
 * @param arr
 */
function unique(arr) {
  const set = new Set(arr)
  return [...set]
}

const res = unique([30, 10, 20, 10, 50, 60, 30, 70])
console.log(res)