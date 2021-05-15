/*
 * @Author: zzj
 * @Date: 2021-05-13 10:50:19
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 15:48:10
 * @Description:
 */
import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleChange = (value) => {
    this.setState({
      value,
    });
  };

  handleSubmit = () => {
    this.props.dispatch({
      type: 'search/getListsAsync',
      payload: this.state.value,
    });
  };

  render() {
    return (
      <SearchBar
        value={this.state.value}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      ></SearchBar>
    );
  }
}
