/*
 * @Author: zzj
 * @Date: 2021-05-16 16:10:31
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 16:24:49
 * @Description:
 */
import React, { Component } from 'react';

export default class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'old text',
    };
  }

  changeText = (str) => {
    this.setState({
      text: str,
    });
  };

  render() {
    return <h1>child text--{this.state.text}</h1>;
  }
}
