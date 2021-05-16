/*
 * @Author: zzj
 * @Date: 2021-05-15 16:41:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-05-16 14:51:08
 * @Description:
 */
import React, { Component } from 'react';
import SearchContext from './searchContext';
import Search from './search';
import Lists from './lists';
import { getLists } from '@/services/search';
import Consumer from './consumer';
import LazyLoad from '@/components/lazyLoad';
// import ErrorBoundary from '@/components/ErrorBoundary';

export default class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      lists: [],
    };
  }

  handleDispatch = async (action) => {
    switch (action.type) {
      case 'TEXT':
        return this.setState({
          text: action.payload,
        });
      case 'LISTS':
        const res = await getLists(action.payload);
        return this.setState({
          lists: res.lists,
        });
      default:
        break;
    }
  };

  render() {
    const houses = {
      info: {},
    };
    return (
      <SearchContext.Provider
        value={{ state: this.state, dispatch: this.handleDispatch }}
      >
        {houses?.info2?.id}
        <Search></Search>
        {/* <Lists></Lists> */}
        <LazyLoad component={import('./lists')}></LazyLoad>
        <Consumer></Consumer>
      </SearchContext.Provider>
    );
  }
}
