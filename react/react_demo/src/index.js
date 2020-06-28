import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import {Layout} from 'antd';
import AppHeader from './components/Header';

const {Header, Footer, Content} = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{minWidth: 1300}}>
        <Header className='header'>
          <AppHeader/>
        </Header>
        <Content className='content'>Content</Content>
        <Footer className='footer'>Footer</Footer>
      </Layout>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
