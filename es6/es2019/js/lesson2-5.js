// Object
let x = 1
let y = 2
let z = 3
let obj = {
  x,
  y,
  [z]: 6,
  * hello () {
    console.log('hello')
  }
}
console.log(obj)
obj.hello()
