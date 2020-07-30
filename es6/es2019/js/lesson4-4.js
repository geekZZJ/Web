const data = {
  portLand: '12/45',
  Dubin: '88/52',
  lima: '88/52'
}

Object.defineProperty(data, 'lima', {
  enumerable: false
})

console.log(Object.keys(data))
console.log(Object.getOwnPropertyDescriptors(data))
console.log(Object.getOwnPropertyDescriptor(data, 'lima'))
