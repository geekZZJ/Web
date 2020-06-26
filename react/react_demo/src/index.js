import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import NewList from "./newList";
import NewButton from "./newButton";
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

class Entry extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/list/:id' component={NewList}></Route>
        <Route path='/button' component={NewButton}></Route>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<Entry/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
