/* function loadScript (src, callback) {
  let script = document.createElement('script')
  script.src = src
  script.onload = () => {
    callback()
  }
  document.head.append(script)
}

function test () {
  console.log('test')
}

loadScript('./1.js', test) */

/* function loadScript (src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    script.onload = () => {
      resolve(src)
    }
    script.onerror = (err) => {
      reject(err)
    }
    document.head.append(script)
  })
} */

/* loadScript('./1.js')
  .then(loadScript('./2.js'))
  .then(loadScript('./3.js')) */
/* const p1 = Promise.resolve(1)
const p2 = Promise.resolve(2)
const p3 = Promise.resolve(3) */

/* Promise.all([p1, p2, p3]).then(value => {
  console.log(value)
}) */

const p1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(1)
    }, 1000)
  })
}

const p2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(2)
    }, 3000)
  })
}

// 先到先得
Promise.race([p1(), p2()]).then(value => {
  console.log(value)
})
