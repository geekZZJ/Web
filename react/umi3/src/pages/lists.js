/*
 * @Author: zzj
 * @Date: 2021-05-12 21:45:41
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-12 22:23:10
 * @Description:
 */
import React, { Component } from 'react';
import ListItem from './list-item';
import ListItem1 from './list-item1';

export default class Lists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'name1',
    };
  }

  handleChild = (msg) => {
    console.log(msg);
    this.setState({
      name: msg,
    });
  };

  render() {
    return (
      <div>
        <ListItem handleItem={this.handleChild}></ListItem>
        <ListItem handleItem={this.handleChild} name={'item2'}></ListItem>
        <ListItem1 name={this.state.name}></ListItem1>
      </div>
    );
  }
}
