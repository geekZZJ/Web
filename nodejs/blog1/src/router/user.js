const {loginCheck} = require('../controller/user')
const {SuccessModel, ErrorModel} = require('../model/resModel')

//获取cookie过期时间
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
    console.log(d.toGMTString())
    return d.toGMTString()
}

const handleUserRouter = (req, res) => {
    const method = req.method

    //登录
    if (method === 'GET' && req.path === '/api/user/login') {
        // const {username, password} = req.body
        const {username, password} = req.query
        const result = loginCheck(username, password)
        return result.then(data => {
            if (data.username) {
                //设置session
                req.session.username = data.username
                req.session.realname = data.realname
                console.log('req session is',req.session)
                return new SuccessModel()
            }
            return new ErrorModel('登录失败')
        })
    }

    //登录验证的测试
    if (method === 'GET' && req.path === '/api/user/login-test') {
        if (req.session.username) {
            return Promise.resolve(new SuccessModel({
                session: req.session
            }))
        }
        return Promise.resolve(new ErrorModel('尚未登录'))
    }
}

module.exports = handleUserRouter