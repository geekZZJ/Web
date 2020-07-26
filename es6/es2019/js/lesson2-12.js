function * loop () {
  for (let i = 0; i < 5; i++) {
    yield console.log(i)
  }
}

const l = loop()
l.next()
l.next()
l.next()
