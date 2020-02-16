var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var db = require('./db')

var pool = mysql.createPool(db)

router.post('/add', function (req, res, next) {
  var param = {
    teaName: req.body.teaName,
    teaAge: req.body.teaAge
  }
  var addSql = 'INSERT INTO teacher(teaName,teaAge) VALUES(?,?)'
  var addSqlParams = [param.teaName, param.teaAge]
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

router.get('/show', function (req, res, next) {
  var sql = 'select * from teacher'
  pool.query(sql, function (err, results) {
    if (err) {
      console.log('error message:', err.message)
    } else {
      if (results) {
        console.log(results)
        res.json({
          status: '0',
          msg: '请求成功',
          data: results
        })
      } else {
        res.json({
          status: '1',
          msg: '未知异常',
          data: null
        })
      }
    }
  })
})

router.post('/del', function (req, res, next) {
  var param = {
    teaId: req.body.teaId
  }
  var delSql = 'DELETE FROM teacher where teaId=' + param.teaId
  pool.query(delSql, function (err, result) {
    if (err) {
      console.log('[DELETE ERROR] - ', err.message)
      return false
    } else {
      console.log(result)
      res.json({
        status: '0',
        msg: '请求成功',
        data: null
      })
    }
  })
})

module.exports = router
