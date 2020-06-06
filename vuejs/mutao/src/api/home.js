/**
 * @name: home
 * @author: 张中俊
 * @date: 2020/6/6 16:01
 * @description：home
 * @update: 2020/6/6 16:01
 */
import axios from 'axios';
import {SUCC_CODE, TIMEOUT} from './config';

export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {timeout: TIMEOUT}).then(res => {
    if (res.data.code === SUCC_CODE) {
      return res.data.slider;
    }

    throw new Error('没有成功获取到数据!');
  }).catch(err => {
    if (err) {
      console.log(err);
    }

    return [
      {
        linkUrl: 'https://www.imooc.com',
        picUrl: require('assets/img/404.png')
      }
    ];
  });
};
