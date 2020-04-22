var request = require('request')

let arr = []

function getArr() {
    const promise = new Promise((resolve, reject) => {
        request('http://localhost:3000/emotion/list', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let res = JSON.parse(body)
                resolve(res)
            } else {
                reject(error)
            }
        })
    })
    return promise
}

const test = async function () {
    const result = await getArr()
    arr = result.data
}

test().then(() => {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].id)
        setTimeout(() => {
            request('http://localhost:3000/emotion/comments?id=' + arr[i].id, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    console.log(body)
                } else {
                    console.log(error)
                }
            })
        }, 1000 * i)
    }
})