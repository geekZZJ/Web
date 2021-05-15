/*
 * @Author: zzj
 * @Date: 2021-05-12 16:04:58
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-12 17:18:39
 * @Description:
 */
import React, { PureComponent, Component } from 'react';

export default class ComponentOld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '132',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    console.log(props, state);
    return state;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return 'getSnapshotBeforeUpdate';
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldComponentUpdate');
  //   console.log(nextProps, nextState);
  //   if (nextState.text === '456' && this.state.text !== nextState.text) {
  //     return true;
  //   }
  //   return false;
  // }

  handleClick = () => {
    this.setState({
      text: '456',
    });
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1 onClick={this.handleClick}>ComponentOld</h1>
        <div>{this.state.text}</div>
      </div>
    );
  }
}
