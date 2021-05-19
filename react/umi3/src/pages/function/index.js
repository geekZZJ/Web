/*
 * @Author: zzj
 * @Date: 2021-05-16 16:58:41
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-18 22:13:15
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import { WingBlank, WhiteSpace, List } from 'antd-mobile';
import { Link } from 'umi';

const Item = List.Item;

export default function (props) {
  const [state, setState] = useState();
  useEffect(() => {}, []);
  return (
    <WingBlank>
      <List>
        <Item>
          <Link to="/function/hook">hook</Link>
        </Item>
        <WhiteSpace></WhiteSpace>
        <Item>
          <Link to="/function/context">context</Link>
        </Item>
        <WhiteSpace></WhiteSpace>
        <Item>
          <Link to="/function/customize">customize</Link>
        </Item>
        <WhiteSpace></WhiteSpace>
      </List>
    </WingBlank>
  );
}
