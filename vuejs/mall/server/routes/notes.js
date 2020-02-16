var express = require('express')
var router = express.Router()
var User = require('../models/user')

// 储存日记
router.post('/send', function (req, res, next) {
  var param = {
    thingTitle: req.body.thingTitle,
    thingContent: req.body.thingContent,
    thingTime: req.body.thingTime
  }
  console.log(param)
  var userId = req.cookies.userId
  User.uptate({'userId': userId}, {
    $push: {
      thingList: {
        thingId: 9,
        thingTitle: param.thingTitle,
        thingTime: param.thingTime,
        thingContent: param.thingContent
      }
    }
  }, function (err, doc) {
    console.log(123)
    if (err) {
      res.json({
        status: '1',
        msg: err.message,
        result: null
      })
    } else {
      console.log(doc)
      res.json({
        status: '0',
        msg: '请求成功',
        result: 'suc'
      })
    }
  })
})

// 查询详细日记内容
router.get('/detail', function (req, res, next) {
  var param = {
    thingId: req.body.thingId
  }
  console.log(param)
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
