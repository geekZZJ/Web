/*
 * @Author: zzj
 * @Date: 2021-05-16 15:02:30
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 15:08:48
 * @Description:
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CreatePortal extends Component {
  constructor(props) {
    super(props);
    this.body = document.querySelector('body');
    this.el = document.createElement('div');
  }

  componentDidMount() {
    this.el.setAttribute('id', 'portal-root');
    this.body.appendChild(this.el);
  }

  componentWillUnmount() {
    this.body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
