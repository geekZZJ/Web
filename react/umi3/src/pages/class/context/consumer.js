/*
 * @Author: zzj
 * @Date: 2021-05-15 17:13:18
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-15 17:19:21
 * @Description:
 */
import React, { Component } from 'react';
import SearchContext from './searchContext';

export default class Consumer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SearchContext.Consumer>
          {({ state, dispatch }) => (
            <h1
              onClick={() =>
                dispatch({ type: 'TEXT', payload: 'consumer test' })
              }
            >
              consumer: {state.text}
            </h1>
          )}
        </SearchContext.Consumer>
      </div>
    );
  }
}
