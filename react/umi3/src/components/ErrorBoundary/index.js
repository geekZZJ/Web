/*
 * @Author: zzj
 * @Date: 2021-05-16 14:14:58
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 14:43:35
 * @Description:
 */
import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      flag: true,
    };
  }

  componentDidCatch(error, info) {}

  render() {
    return (
      <div>
        {this.state.flag ? (
          <h1>发生错误，请稍后再试！</h1>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
