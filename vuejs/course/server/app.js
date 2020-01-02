var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var ejs = require('ejs')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var user = require('./routes/user')
var classes = require('./routes/class')
var teacher = require('./routes/teacher')
var course = require('./routes/course')
var classroom = require('./routes/classroom')
var student = require('./routes/student')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.engine('.html', ejs.__express)
app.set('view engine', 'html')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
  if (req.cookies.adminId) {
    next()
  } else {
    if (req.originalUrl == '/user/login' || req.originalUrl == '/user/logout' || req.originalUrl == '/user/reg') {
      next()
    } else {
      res.json({
        status: '1001',
        msg: '当前用户未登录',
        data: null
      })
    }
  }
})

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/user', user)
app.use('/class', classes)
app.use('/course', course)
app.use('/teacher', teacher)
app.use('/classroom', classroom)
app.use('/student', student)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
