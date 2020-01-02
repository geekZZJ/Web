var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var db = require('./db')

var pool = mysql.createPool(db)

router.post('/add', function (req, res, next) {
  var param = {
    academy: req.body.academy,
    major: req.body.major,
    className: req.body.className,
    stuName: req.body.stuName,
    stuGender: req.body.stuGender
  }
  var sql = 'select * from class where academy=\'' + param.academy + '\' and major=\'' + param.major + '\' and className=\'' + param.className + '\''
  var classId = 0
  pool.query(sql, function (err, results) {
    if (err) {
      console.log('error message:', err.message)
    } else {
      if (results.length == 1) {
        console.log(results)
        classId = results[0].classId
        console.log(classId)
      } else {
        res.json({
          status: '1',
          msg: '未知异常',
          data: null
        })
      }
    }
  })
  var addSql = 'INSERT INTO student(stuName,stuGender,classId) VALUES(?,?,?)'
  var addSqlParams = [param.stuName, parseInt(param.stuGender), classId]
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
  var sql = 'select stuId,stuName,stuGender from student'
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
    stuId: req.body.stuId
  }
  var delSql = 'DELETE FROM student where stuId=' + param.stuId
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
