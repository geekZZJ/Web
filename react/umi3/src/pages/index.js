/*
 * @Author: zzj
 * @Date: 2021-05-11 21:52:54
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 17:27:22
 * @Description:
 */
import styles from './index.less';
import React, { Component } from 'react';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className={styles.title}>Page index</h1>;
  }
}
