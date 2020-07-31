/* console.log(JSON.stringify('\u{D800}'))
let arr = [1, [2, 3], [4, 5, [6, 7]]]
console.log(arr.flat(2)) */

let str = `"foo" and "bar" and "baz"`

/* function select (regExp, str) {
  const matches = []
  while (true) {
    const match = regExp.exec(str)
    if (match === null) break
    matches.push(match)
  }
  return matches
}

console.log(select(/"([^"]*)"/g, str)) */

function select (regExp, str) {
  const matches = []
  for (const match of str.matchAll(regExp))  {
    matches.push(match[1])
  }
  return matches
}

console.log(select(/"([^"]*)"/g, str))
