var express = require('express')
var router = express.Router()
const {getId, getComment, calculate, updateScore} = require('../controller/emotion')
const {SuccessModel, ErrorModel} = require('../model/resModel')

async function loopArray(comment, arr) {
    for (let i = 0; i < comment.length; i++) {
        let content = comment[i].content
        const score = calculate(content)
        await score.then((data) => {
            let temp = parseFloat(data.slice(2, 9))
            arr.push(temp)
        })
    }
}

const average = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
    return (sum / arr.length) * 5
}

router.get('/list', function (req, res, next) {
    const result = getId()
    return result.then(listData => {
        console.log(listData) //数组中每一项为对象
        res.json(new SuccessModel(listData))
    })
})

router.get('/comments', function (req, res, next) {
    let id = req.query.id
    const result = getComment(id)
    result.then(comment => { //comment为数组
        if (comment.length) {
            let arr = []
            loopArray(comment, arr).then(() => {
                console.log(arr)
                let aver = average(arr)
                console.log(aver)
                const updateData = updateScore(id, aver)
                return updateData.then(data => {
                    console.log(data)
                    res.json(new SuccessModel(null))
                })
            })
        } else {
            return
        }
    })
})

module.exports = router