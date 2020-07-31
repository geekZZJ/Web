const Gen = time => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (time < 0.5) {
        reject(time)
      } else {
        resolve(time)
      }
    }, time)
  })
}

Gen(Math.random() * 1000)
  .then(value => console.log(value))
  .catch(err => console.log(err))
  .finally(()=>{
    console.log('finish')
  })
