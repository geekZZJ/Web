// Object
/* let x = 1
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
obj.hello() */
let map = new Map()
map.set(1, 2)
map.set(3, 5)
map.set(1, 3)
// map.delete(1)
// map.clear()
/* console.log(map.size)
console.log(map.has(2)) */

/* console.log(map.get(1))
console.log(map.keys(), map.values()) */

/* map.forEach((value, key) => {
  console.log(value, key)
}) */

for (let [key, value] of map) {
  console.log(key, value)
}
