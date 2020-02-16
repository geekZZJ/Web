var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var db = require('./db')

var pool = mysql.createPool(db)

router.post('/add', function (req, res, next) {
  var param = {
    class: req.body.class,
    courseName: req.body.courseName
  }
  var addSql = 'INSERT INTO course(class,courseName) VALUES(?,?)'
  var addSqlParams = [param.class, param.courseName]
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
