import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend() {
  // const url = 'https://c.y.qq.com/splcloud/fcgi-bin/p.fcg'
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    // hostUin: 0,
    // sin: 0,
    // ein: 29,
    // sortId: 5,
    needNewCode: 1,
    // categoryId: 10000000,
    // rnd: Math.random()
    uin: 0
  })

  return jsonp(url, data, options)
}