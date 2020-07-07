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

function loadScript (src) {
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
}

loadScript('./1.js')
  .then(loadScript('./2.js'))
  .then(loadScript('./3.js'))
