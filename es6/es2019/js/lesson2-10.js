// console.log(Math.floor.apply(null, [1.23]))

// console.log(Reflect.apply(Math.floor, null, [3.72]))

// let price = 91.5
// console.log(Reflect.apply(price > 100 ? Math.floor : Math.ceil, null, [price]))

// let d = new Date()
// console.log(d.getTime())

// let d = Reflect.construct(Date, [])
// console.log(d.getTime())

// const obj = { x: 1, y: 2 }
// console.log(Reflect.getOwnPropertyDescriptor(obj, 'x'))

// let d = new Date()
// console.log(Reflect.getPrototypeOf(d))

const obj = { x: 1, y: 2 }
console.log(Reflect.has(obj, 'x'))
