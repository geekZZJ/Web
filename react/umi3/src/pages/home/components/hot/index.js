/*
 * @Author: zzj
 * @Date: 2021-06-20 22:25:55
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-28 21:56:52
 * @Description:
 */
import React, { useState, useEffect } from 'react';

export default function (props) {
  return (
    <div className="hot">
      <h1>最热民宿</h1>
      <div className="hot-lists">
        {props?.houses?.map((item) => (
          <div className="hot-lists-item" key={item.id}>
            <img className="img" alt="img" src={item.img}></img>
            <div className="title">{item.title}</div>
            <div className="info">{item.info}</div>
            <div className="price">￥{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
