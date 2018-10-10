const Koa = require('koa')
const logger = require('koa-logger')
const app = new Koa()

const mid1 = async(ctx,next)=>{
    ctx.type = 'text/html;charset=utf-8'
    await next()
}
const mid2 = async(ctx,next)=>{
    ctx.body = 'Hi '
    await next()
}
const mid3 = async(ctx,next)=>{
    ctx.body = ctx.body + 'Luke'
    await next()
}

// app.use(async(ctx,next)=>{
//     // console.log(ctx.href)
//     // console.log(ctx.path)
//     // console.log(ctx.url)
//     // console.log(ctx.method)
//     // console.log(ctx)
//     ctx.type = 'text/html;charset=utf-8'
//     ctx.body = 'Hi Luke'
// })

app.use(logger())

app.use(mid1)
app.use(mid2)
app.use(mid3)

app.listen(2333)
