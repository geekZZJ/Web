/*
 * @Author: zzj
 * @Date: 2021-05-12 15:42:58
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-12 15:48:19
 * @Description:
 */
import React, { Component } from 'react';

export default class Id extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.id}</h1>
      </div>
    );
  }
}
