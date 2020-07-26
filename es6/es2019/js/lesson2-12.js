/* function * loop () {
  for (let i = 0; i < 5; i++) {
    yield console.log(i)
  }
}

const l = loop()
l.next()
l.next()
l.next() */

function * gen () {
  let val
  val = yield 1
  console.log(val)
}

const l = gen()
l.next()
l.next()
