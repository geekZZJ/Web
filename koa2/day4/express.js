const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('hi luke')
})

app.listen(2333)