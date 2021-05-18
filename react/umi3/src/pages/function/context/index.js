/*
 * @Author: zzj
 * @Date: 2021-05-18 21:44:27
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-18 22:08:46
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import { UserContextProvider } from './userContext';
import App from './app';

export default function (props) {
  // const [count, setCount] = useState(0);

  useEffect(() => {}, []);

  return (
    <UserContextProvider>
      <App {...props}></App>
    </UserContextProvider>
  );
}
