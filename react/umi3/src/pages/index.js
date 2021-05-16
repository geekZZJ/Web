/*
 * @Author: zzj
 * @Date: 2021-05-11 21:52:54
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 16:06:00
 * @Description:
 */
import styles from './index.less';
import React, { Component } from 'react';
import { Link } from 'umi';
import { List } from 'antd-mobile';

const Item = List.Item;

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className={styles.title}>Page index</h1>
        <List>
          <Item>
            <Link to="/class/component-old">component-old</Link>
          </Item>
          <Item>
            <Link to="/class/lists">lists</Link>
          </Item>
          <Item>
            <Link to="/class/dva">dva</Link>
          </Item>
          <Item>
            <Link to="/class/context">context</Link>
          </Item>
          <Item>
            <Link to="/class/lazyload">lazyLoad</Link>
          </Item>
          <Item>
            <Link to="/class/modal">modal</Link>
          </Item>
          <Item>
            <Link to="/class/refs">refs</Link>
          </Item>
        </List>
      </div>
    );
  }
}
