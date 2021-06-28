/*
 * @Author: zzj
 * @Date: 2021-06-16 14:43:51
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-28 21:50:41
 * @Description:
 */
import React, { useEffect } from 'react';
import Header from './components/header';
import Hot from './components/hot';
import Search from './components/search';
import { useHttpHook } from '@/hooks';

import './index.less';

export default function (props) {
  const [cities, citiesLoading] = useHttpHook({
    url: '/commons/cities',
  });

  const [houses, housesLoading] = useHttpHook({
    url: '/house/hot',
  });

  return (
    <div className="home">
      {/* 登录 */}
      <Header />
      {/* 搜索 */}
      <Search cities={cities} citiesLoading={citiesLoading} />
      {/* 热门民宿 */}
      <Hot houses={houses} />
    </div>
  );
}
