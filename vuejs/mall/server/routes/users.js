var express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var User = require('../models/user')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})

// 连接MongoDB数据库
mongoose.connect('mongodb://root:root@134.175.48.227:27017/test')

mongoose.connection.on('connected', function () {
  console.log('MongoDB connected success.')
})

mongoose.connection.on('error', function () {
  console.log('MongoDB connected fail.')
})

mongoose.connection.on('disconnected', function () {
  console.log('MongoDB connected disconnected.')
})

// 登录接口
router.post('/login', function (req, res, next) {
  var param = {
    userName: req.body.username,
    userPwd: req.body.psd
  }
  console.log(param)
  User.findOne(param, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message
      })
    } else {
      if (doc) {
        res.cookie('userId', doc.userId, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })
        res.cookie('userName', doc.userName, {
          path: '/',
          maxAge: 1000 * 60 * 60
        })
        // req.session.user = doc
        res.json({
          status: '0',
          msg: '请求成功',
          result: {
            userName: doc.userName
          }
        })
      } else {
        res.json({
          status: '1',
          msg: '用户名或密码错误',
          result: null
        })
      }
    }
  })
})

// 登出接口
router.post('/logout', function (req, res, next) {
  res.cookie('userId', '', {
    path: '/',
    maxAge: -1
  })
  res.json({
    status: '0',
    msg: '请求成功',
    result: ''
  })
})

// 检测是否登录
router.get('/checkLogin', function (req, res, next) {
  if (req.cookies.userId) {
    res.json({
      status: '0',
      msg: '',
      result: req.cookies.userName
    })
  } else {
    res.json({
      status: '1',
      msg: '未登录',
      result: ''
    })
  }
})

// 列表
router.get('/list', function (req, res, next) {
  var userId = req.cookies.userId
  User.findOne({userId: userId}, function (err, doc) {
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: null
      })
    } else {
      if (doc) {
        res.json({
          status: '0',
          msg: '请求成功',
          result: doc.thingList
        })
      }
    }
  })
})

module.exports = router
