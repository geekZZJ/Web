/*
 * @Author: zzj
 * @Date: 2021-06-20 22:25:55
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-21 10:47:05
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import { Link } from 'umi';

export default function (props) {
  const [state, setState] = useState();
  useEffect(() => {}, []);
  return (
    <div className="header">
      <div className="header_title">民宿</div>
      <div className="header_login">
        <Link to="/login">登录</Link> | <Link to="/register">注册</Link>
      </div>
    </div>
  );
}
