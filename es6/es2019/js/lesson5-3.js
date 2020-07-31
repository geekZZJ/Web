/* const input = {
  a: 1,
  b: 2
}

const output = {
  c: 3,
  ...input
}
console.log(input, output)
input.a = 4
console.log(output) */

const input = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5
}

const { a, b, ...rest } = input
console.log(a, b, rest)
