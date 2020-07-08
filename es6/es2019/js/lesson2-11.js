let o = {
  name: 'zzj',
  price: 190
}

let d = new Proxy(o, {
  get (target, p, receiver) {
    if (p === 'price') {
      return target[p] + 20
    } else {
      return target[p]
    }
  }
})
console.log(d.price)
