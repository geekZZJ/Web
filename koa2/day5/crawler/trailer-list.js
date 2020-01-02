const url = 'https://movie.douban.com/tag/#/?sort=U&range=6,10&tags='
const puppeteer = require('puppeteer')

:(async()=>{
    console.log('start')

    const browser = await puppeteer.launch({
        args:['--no-sandbox'],
        dumpio:false
    })
})