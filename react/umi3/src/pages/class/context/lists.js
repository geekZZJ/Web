/*
 * @Author: zzj
 * @Date: 2021-05-13 11:03:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 17:09:13
 * @Description:
 */
import React, { Component } from 'react';
import { List } from 'antd-mobile';
import SearchContext from './searchContext';

const Item = List.Item;

export default class Lists extends Component {
  static contextType = SearchContext;
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    const { text, lists } = this.context.state;
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
