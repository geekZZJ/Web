/*
 * @Author: zzj
 * @Date: 2021-05-18 21:47:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-18 22:07:41
 * @Description:
 */
import React, { useState, useEffect, useContext } from 'react';
import User from './user';
import { UserContext } from './userContext';
import { Button } from 'antd-mobile';

export default function (props) {
  // const [count, setCount] = useState(0);
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {}, []);

  const handleLogin = () => {
    dispatch({
      type: 'LOGIN',
      payload: true,
    });
  };

  return (
    <div>
      {state.isLogin ? (
        <User></User>
      ) : (
        <Button type="primary" onClick={handleLogin}>
          登录
        </Button>
      )}
    </div>
  );
}
