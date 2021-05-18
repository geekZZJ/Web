/*
 * @Author: zzj
 * @Date: 2021-05-18 21:49:42
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-18 22:10:38
 * @Description:
 */
import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './userContext';

export default function (props) {
  // const [count, setCount] = useState(0);
  const { state } = useContext(UserContext);

  useEffect(() => {}, []);

  return (
    <div>
      <h1>user:</h1>
      <h1>user-id:{state.user.id}</h1>
      <h1>user-name:{state.user.name}</h1>
    </div>
  );
}
