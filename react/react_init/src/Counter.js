import React, {Component, Fragment} from "react";
import Child from './Child';

class Counter extends Component {
  constructor() {
    super();
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.state = {
      counter: 1
    }
  }

  handleBtnClick() {
    const newCounter = this.state.counter + 1;
    this.setState({
      counter: newCounter
    })
  }

  render() {
    // 当组件初次创建的时候，render函数会被执行一次
    // 当state数据发生变更的时候，render函数会被重新执行
    // 当props数据发生变更的时候，render函数会被重新执行
    return (
      <Fragment>
        <button onClick={this.handleBtnClick}>增加</button>
        <Child number={this.state.counter}></Child>
      </Fragment>
    );
  }
}

export default Counter;
