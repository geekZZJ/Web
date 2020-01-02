var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var db = require('./db')

var pool = mysql.createPool(db)

router.post('/class', function (req, res, next) {
  var param = {
    academy: req.body.academy,
    major: req.body.major,
    className: req.body.className,
    classCount: req.body.classCount
  }
  var addSql = 'INSERT INTO class(academy,major,className,classCount) VALUES(?,?,?,?)'
  var addSqlParams = [param.academy, param.major, param.className, param.classCount]
  pool.query(addSql, addSqlParams, function (err, results) {
    if (err) {
      console.log('[INSERT ERROR] - ', err.message)
      return false
    } else {
      console.log(results)
      res.json({
        status: '0',
        msg: '请求成功',
        data: null
      })
    }
  })
})

module.exports = router
