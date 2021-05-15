/*
 * @Author: zzj
 * @Date: 2021-05-15 17:44:28
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 17:55:21
 * @Description:
 */
import React, { Component, lazy, Suspense } from 'react';
const Demo = lazy(() => import('./demo'));

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        flag: true,
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.flag ? (
          <Suspense fallback={<div>loading...</div>}>
            <Demo></Demo>
          </Suspense>
        ) : null}
      </div>
    );
  }
}
