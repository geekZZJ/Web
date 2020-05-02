var express = require('express')
var router = express.Router()
const {getId, getComment, calculate, updateScore} = require('../controller/emotion')
const {SuccessModel, ErrorModel} = require('../model/resModel')

async function loopArray(comment, arr) {
    for (let i = 0; i < comment.length; i++) {
        let content = comment[i].content
        const score = calculate(content)
        await score.then((data) => {
            console.log(content)
            let temp = parseFloat(data.items[0].positive_prob.toFixed(5))
            console.log(temp)
            arr.push(temp)
        }).catch(ex => {
            console.log(ex)
            return
        })
    }
}

const average = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return (sum / arr.length) * 5
}


router.get('/list', function (req, res, next) {
    const result = getId()
    return result.then(listData => {
        // console.log(listData) //数组中每一项为对象
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
                const updateData = updateScore(id, aver)
                return updateData.then(() => {
                    res.json(new SuccessModel(null, '请求成功'))
                })
            })
        } else {
            res.json(new SuccessModel(null, '无评论'))
        }
    })
})


router.get('/cal', function (req, res, next) {
    var text = "苹果是一家伟大的公司"
    const result = calculate(text)
    return result.then(listData => {
        // console.log(listData) //数组中每一项为对象
        res.json(new SuccessModel(listData))
    })
})


module.exports = router