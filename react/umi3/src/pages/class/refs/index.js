/*
 * @Author: zzj
 * @Date: 2021-05-16 16:04:49
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 16:36:55
 * @Description:
 */
import React, { Component, createRef } from 'react';
import Child from './child';
import { Button } from 'antd-mobile';
import InputForward from './forward';

export default class Refs extends Component {
  constructor(props) {
    super(props);
    this.domRef = createRef();
    this.childRef = createRef();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log(this.domRef.current.innerHTML);
    this.inputRef.current.focus();
  }

  handleChild = (str) => {
    this.childRef.current.changeText(str);
  };

  render() {
    return (
      <>
        <h1 ref={this.domRef}>refs text</h1>
        <Child ref={this.childRef}></Child>
        <Button
          onClick={() => {
            this.handleChild('new text');
          }}
        >
          修改child的值
        </Button>
        <InputForward ref={this.inputRef}></InputForward>
      </>
    );
  }
}
