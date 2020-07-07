let options = {
  title: 'menu',
  width: 100,
  height: 200
}
/* let { title, width, height } = options
console.log(title, width, height) */
let { title, ...last } = options
console.log(title, last)
