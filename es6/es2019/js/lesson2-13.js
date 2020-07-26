let authors = {
  allAuthors: {
    fiction: ['a', 'b', 'c'],
    science: ['d', 'e', 'f'],
    fantasy: ['g', 'h', 'i']
  },
  addres: []
}

/* let r = []
for (let [k, v] of Object.entries(authors.allAuthors)) {
  r = r.concat(v)
}
console.log(r) */
authors[Symbol.iterator] = function () {
  let allAuthors = this.allAuthors
  let keys = Reflect.ownKeys(allAuthors)
  let values = []
  return {
    next () {
      if (!values.length) {
        if (keys.length) {
          values = allAuthors[keys[0]]
          keys.shift()
        }
      }
      return {
        done: !values.length,
        value: values.shift()
      }
    }
  }
}

let r = []
for (let v of authors) {
  r.push(v)
}
console.log(r)
