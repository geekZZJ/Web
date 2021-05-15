/*
 * @Author: zzj
 * @Date: 2021-05-12 21:53:45
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-12 22:15:26
 * @Description:
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem extends Component {
  static defaultProps = {
    name: 'item1',
  };

  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.handleItem(this.props.name);
  };

  render() {
    return <h1 onClick={this.handleClick}>{this.props.name}</h1>;
  }
}
