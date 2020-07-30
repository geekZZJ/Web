/* async function firstAsync () {
  return 27
} */

// console.log(firstAsync()) // 返回promise对象
// firstAsync().then(res => {
//   console.log(res)
// })
// console.log(firstAsync() instanceof Promise)
async function firstAsync () {
  let promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve('now it is done')
    }, 1000)
  })
  let result = await promise
  console.log(result)
  console.log(2)
  return 3
}

firstAsync().then(val => {
  console.log(val)
})
