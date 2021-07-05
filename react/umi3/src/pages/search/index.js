/*
 * @Author: zzj
 * @Date: 2021-06-28 22:09:47
 * @LastEditors: zzj
 * @LastEditTime: 2021-07-05 11:25:05
 * @Description:
 */
import React, { useEffect, useState } from 'react';
import { SearchBar, ActivityIndicator } from 'antd-mobile';
import { useHttpHook } from '@/hooks';
import './index.less';

export default function name(params) {
  const [houseName, setHouseName] = useState('');

  const [houses, loading] = useHttpHook({
    url: '/house/search',
    body: {},
  });
  useEffect(() => {}, []);

  const handleChange = (value) => {
    setHouseName(value);
  };

  const handleCancel = () => {};

  const handleSubmit = () => {};

  return (
    <div className="search-page">
      {/* 顶部搜索栏 */}
      <SearchBar
        placeholder="搜索民宿"
        value={houseName}
        onChange={handleChange}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      ></SearchBar>
      {/* 搜索结果 */}
      {loading ? (
        <ActivityIndicator toast />
      ) : (
        <div className="result">
          {houses.map((item) => (
            <div className="item" key={item.id}>
              <img alt="img" src={item.img}></img>
              <div className="item-right">
                <div className="title">{item.title}</div>
                <div className="price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
