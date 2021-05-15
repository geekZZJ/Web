/*
 * @Author: zzj
 * @Date: 2021-05-12 22:17:23
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-12 22:19:43
 * @Description:
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListItem1 extends Component {
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
    return <h1 onClick={this.handleClick}>item1--{this.props.name}</h1>;
  }
}
