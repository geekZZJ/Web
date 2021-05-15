/*
 * @Author: zzj
 * @Date: 2021-05-15 17:56:56
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 18:07:24
 * @Description:
 */
import React, { Component, lazy, Suspense } from 'react';

export default class Index extends Component {
  constructor(props) {
    super(props);
  }

  _renderLazy = () => {
    let Lazy;
    const { component, delay, ...other } = this.props;
    if (!component || component.constructor.name !== 'Promise') {
      Lazy = import('./error');
    }

    Lazy = lazy(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(component);
        }, delay || 300);
      });
    });
    return <Lazy {...other}></Lazy>;
  };

  render() {
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          {this._renderLazy()}
        </Suspense>
      </div>
    );
  }
}
