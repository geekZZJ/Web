var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var db = require('./db')

var pool = mysql.createPool(db)

router.post('/add', function (req, res, next) {
  var param = {
    classroomAdd: req.body.classroomAdd,
    classroomCapacity: req.body.classroomCapacity
  }
  var addSql = 'INSERT INTO classroom(classroomAdd,classroomCapacity) VALUES(?,?)'
  var addSqlParams = [param.classroomAdd, param.classroomCapacity]
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
