/*
 * @Author: zzj
 * @Date: 2021-05-13 10:48:30
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-13 11:29:56
 * @Description:
 */
import React, { Component } from 'react';
import Search from './search';
import Lists from './lists';
import { connect } from 'dva';

class Dva extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Search {...this.props}></Search>
        <Lists {...this.props}></Lists>
      </div>
    );
  }
}

export default connect(({ search }) => ({ search }))(Dva);
