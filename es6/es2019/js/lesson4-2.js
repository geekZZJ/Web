let grade = {
  'lilei': 96,
  'test': 98
}

/* let result = []
for (let k in grade) {
  result.push(k)
}

console.log(result) */

/* console.log(Object.keys(grade).filter(item => {
  return item === 'lilei'
}))

console.log(Object.values(grade).filter(item => item > 96)) */
let result = []
for (let [k] of Object.entries(grade)) {
  result.push(k)
}
console.log(result)
