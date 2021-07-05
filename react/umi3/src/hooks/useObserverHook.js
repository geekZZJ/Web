/*
 * @Author: zzj
 * @Date: 2021-07-05 15:02:08
 * @LastEditors: zzj
 * @LastEditTime: 2021-07-05 15:08:04
 * @Description:
 */
import { useEffect, useState } from 'react';

let observer;
export default function useObserverHook(ele, callback, watch = []) {
  useEffect(() => {
    observer = new IntersectionObserver((entries) => {
      callback && callback(entries);
    });
    observer.observe(document.querySelector(ele));

    return () => {
      if (observer) {
        // 解绑元素
        observer.unobserve(document.querySelector(ele));
        // 停止监听
        observer.disconnect();
      }
    };
  }, watch);
}
