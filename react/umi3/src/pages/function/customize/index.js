/*
 * @Author: zzj
 * @Date: 2021-05-18 22:13:46
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-19 21:35:00
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import { useTitleHook } from '@/hooks';

export default function (props) {
  const [state, setState] = useState('customize');
  const title = useTitleHook(state);
  useTitleHook(state);

  useEffect(() => {}, []);

  const handleClick = () => {
    setState('changed');
  };

  return (
    <div>
      <h1 onClick={handleClick}>{title}</h1>
    </div>
  );
}
