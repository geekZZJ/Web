/*
 * @Author: zzj
 * @Date: 2021-05-13 11:03:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 16:15:11
 * @Description:
 */
import React, { Component } from 'react';
import { List } from 'antd-mobile';

const Item = List.Item;

export default class Lists extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { text, lists } = this.props.search;
    return (
      <div>
        <h1>text:{text}</h1>
        <List>
          {lists.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
          <Item></Item>
        </List>
      </div>
    );
  }
}
