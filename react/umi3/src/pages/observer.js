/*
 * @Author: zzj
 * @Date: 2021-07-05 11:33:52
 * @LastEditors: zzj
 * @LastEditTime: 2021-07-05 15:16:18
 * @Description:
 */
import React, { useEffect } from 'react';
import { history } from 'umi';
import { useObserverHook } from '@/hooks';

let observer;
export default function (props) {
  useObserverHook('#loading', (entries) => {
    console.log('observer -> entries', entries);
  });
  // useEffect(() => {
  //   console.log('进入页面');
  //   observer = new IntersectionObserver((entries) => {
  //     console.log('observer -> entries', entries);
  //   });
  //   observer.observe(document.querySelector('#loading'));

  //   return () => {
  //     console.log('离开页面');
  //     if (observer) {
  //       // 解绑元素
  //       observer.unobserve(document.querySelector('#loading'));
  //       // 停止监听
  //       observer.disconnect();
  //     }
  //   };
  // }, []);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <div>
      observer
      <button onClick={handleClick}>首页</button>
      <div
        id="loading"
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#f60',
          marginTop: '1000px',
        }}
      >
        loading
      </div>
    </div>
  );
}
