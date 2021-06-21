/*
 * @Author: zzj
 * @Date: 2021-06-16 14:43:51
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-21 10:44:09
 * @Description:
 */
import React from 'react';
import Header from './components/header';
import Hot from './components/hot';
import Search from './components/search';

import './index.less';

export default function (props) {
  return (
    <div className="home">
      {/* 登录 */}
      <Header />
      {/* 搜索 */}
      <Search />
      {/* 热门民宿 */}
      <Hot />
    </div>
  );
}
