/*
 * @Author: zzj
 * @Date: 2021-05-18 22:13:46
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-19 22:17:46
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import { useTitleHook, useHttpHook } from '@/hooks';

export default function (props) {
  const [state, setState] = useState('customize');
  const title = useTitleHook(state);
  useTitleHook(state);

  useEffect(() => {}, []);

  const [listRes, loading] = useHttpHook({
    url: '/getListsAsync',
    method: 'get',
    watch: [state],
  });

  console.log(listRes, loading);

  const handleClick = () => {
    setState('changed');
  };

  return (
    <div>
      <h1 onClick={handleClick}>{title}</h1>
    </div>
  );
}
