// for循环
const arr = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
        continue
    }
    // console.log(arr[i])
}

//forEach循环
arr.forEach(function (item) {
    if (item === 2) {
        // break
        // continue
    }
    // console.log(item)
})

// every
arr.every(function (item) {
    console.log(item)
    return true
})