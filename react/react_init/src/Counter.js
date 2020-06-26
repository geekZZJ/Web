import React, {Component, Fragment} from "react";
import Child from './Child';

class Counter extends Component {
  constructor() {
    console.log('constructor');
    super();
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.state = {
      counter: 1
    }
  }

  handleBtnClick() {
    // console.log(this.buttonElem.clientTop);
    const newCounter = this.state.counter + 1;
    // setState是异步的
    this.setState({
      counter: newCounter
    })
  }

  // 挂载后自动执行
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 更新前自动执行
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // 渲染时自动执行
  render() {
    // 当组件初次创建的时候，render函数会被执行一次
    // 当state数据发生变更的时候，render函数会被重新执行
    // 当props数据发生变更的时候，render函数会被重新执行
    // ref写在html标签上，获取的是dom节点
    // ref写在组件标签上，获取的是组件的js实例
    console.log('render');
    return (
      <Fragment>
        <button
          onClick={this.handleBtnClick}
          ref={button => {
            this.buttonElem = button
          }}
        >
          增加
        </button>
        <Child number={this.state.counter}></Child>
      </Fragment>
    );
  }
}

export default Counter;
