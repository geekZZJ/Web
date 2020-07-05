import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.css';
import {Layout} from 'antd';
import AppHeader from './components/Header';
import List from "./containers/List";
import Detail from "./containers/Detail";

const {Header, Footer, Content} = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{minWidth: 1300}}>
          <Header className='header'>
            <AppHeader/>
          </Header>
          <Content className='content'>

            <Switch>
              <Route path='/detail' component={Detail}></Route>
              <Route path='/:id' component={List}></Route>
            </Switch>
          </Content>
          <Footer className='footer'>@copyright zzj 2020</Footer>
        </Layout>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
