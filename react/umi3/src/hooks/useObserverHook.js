/*
 * @Author: zzj
 * @Date: 2021-07-05 15:02:08
 * @LastEditors: zzj
 * @LastEditTime: 2021-07-14 21:45:27
 * @Description:
 */
import { useEffect } from 'react';

let observer;
export default function useObserverHook(ele, callback, watch = []) {
  useEffect(() => {
    const node = document.querySelector(ele);
    if (node) {
      observer = new IntersectionObserver((entries) => {
        callback && callback(entries);
      });
      observer.observe(node);
    }

    return () => {
      if (observer && node) {
        // 解绑元素
        observer.unobserve(node);
        // 停止监听
        observer.disconnect();
      }
    };
  }, watch);
}
