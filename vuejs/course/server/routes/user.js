var express = require('express')
var router = express.Router()
var mysql = require('mysql')
var db = require('./db')

var pool = mysql.createPool(db)

router.post('/login', function (req, res, next) {
  var param = {
    userAccount: req.body.account,
    userPwd: req.body.pwd
  }
  var sql = 'select * from admin where account=' + param.userAccount
  pool.query(sql, function (err, results) {
    if (err) {
      console.log('error message:', err.message)
    } else {
      if (results.length == 0) {
        res.json({
          status: '2',
          msg: '用户不存在',
          data: null
        })
      } else if (results[0].pwd == param.userPwd) {
        console.log(results)
        res.cookie('adminId', results[0].adminId, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })
        res.cookie('userName', results[0].name, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })
        res.json({
          status: '0',
          msg: '请求成功',
          data: {
            adminId: results[0].adminId,
            userName: results[0].name,
            userAccount: results[0].account
          }
        })
      } else {
        res.json({
          status: '1',
          msg: '密码错误',
          data: null
        })
      }
    }
  })
})

router.post('/info', function (req, res, next) {
  var param = {
    adminId: req.body.adminId
  }
  var sql = 'select * from admin where adminId=' + param.adminId
  pool.query(sql, function (err, results) {
    if (err) {
      console.log('error message:', err.message)
    } else {
      console.log(results)
      res.json({
        status: '0',
        msg: '请求成功',
        data: {
          adminId: results[0].adminId,
          userName: results[0].name,
          userAccount: results[0].account,
          gender: results[0].gender
        }
      })
    }
  })
})

// 登出
router.post('/logout', function (req, res, next) {
  res.cookie('adminId', '', {
    path: '/',
    maxAge: -1
  })
  res.json({
    status: '0',
    msg: '请求成功',
    data: null
  })
})

router.get('/checkLogin', function (req, res, next) {
  if (req.cookies.adminId) {
    res.json({
      status: '0',
      msg: '请求成功',
      data: {
        userName: req.cookies.userName,
        adminId: req.cookies.adminId
      }
    })
  } else {
    res.json({
      status: '1',
      msg: '未登录',
      data: null
    })
  }
})

router.post('/reg', function (req, res, next) {
  var param = {
    name: req.body.name,
    account: req.body.account,
    pwd: req.body.pwd,
    gender: req.body.gender
  }
  var sql = 'select * from admin where account=' + param.account
  pool.query(sql, function (err, results) {
    if (err) {
      console.log('error message:', err.message)
    } else {
      if (results.length == 0) {
        var addSql = 'INSERT INTO admin(name,account,pwd,gender) VALUES(?,?,?,?)'
        var addSqlParams = [param.name, param.account, param.pwd, param.gender]
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
      } else if (results.length == 1) {
        res.json({
          status: '3',
          msg: '账号已存在',
          data: null
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

module.exports = router
