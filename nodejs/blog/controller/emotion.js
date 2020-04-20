const {exec} = require('../db/mysql')
const {nlp} = require('../conf/api')


const getId = () => {
    let sql = 'select id from blog where deleted=0'
    //返回promise
    return exec(sql)
}

const getComment = (id) => {
    let sql = 'select blog_id,content from comment where deleted=0 and blog_id=' + id
    return exec(sql)
}

const calculate = (text) => {
    const promise = new Promise((resolve, reject) => {
        nlp.sentiment(text, data => {
            resolve(data)
        })
    })
    return promise
}

const updateScore = (id, aver) => {
    let sql = `update emotion set grade='${aver}' where id=${id}`

    return exec(sql)
}

module.exports = {
    getId,
    getComment,
    calculate,
    updateScore
}