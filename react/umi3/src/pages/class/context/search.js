/*
 * @Author: zzj
 * @Date: 2021-05-13 10:50:19
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 17:10:31
 * @Description:
 */
import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile';
import SearchContext from './searchContext';

export default class Search extends Component {
  static contextType = SearchContext;

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
    this.context.dispatch({
      type: 'TEXT',
      payload: this.state.value,
    });
    this.context.dispatch({
      type: 'LISTS',
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
