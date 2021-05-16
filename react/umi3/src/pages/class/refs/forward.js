/*
 * @Author: zzj
 * @Date: 2021-05-16 16:26:15
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 16:32:36
 * @Description:
 */
import React, { Component, forwardRef } from 'react';

const inputForward = forwardRef((props, ref) => {
  return (
    <div>
      姓名：<input ref={ref}></input>
    </div>
  );
});

export default inputForward;
