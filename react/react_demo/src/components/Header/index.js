import React, {Component, Fragment} from "react";
import logo from './logo.png';
import './style.css';
import axios from 'axios';
import {Menu} from 'antd';
import {
  HighlightOutlined,
  ThunderboltOutlined,
  WifiOutlined,
  TagsOutlined,
  SoundOutlined,
  ShakeOutlined
} from '@ant-design/icons';

class AppHeader extends Component {
  constructor() {
    super();
    this.state = {
      list: [
        {
          id: 1,
          icon: <HighlightOutlined/>,
          title: 'VOA慢速英语'
        },
        {
          id: 2,
          icon: <ThunderboltOutlined/>,
          title: 'VOA常速英语'
        },
        {
          id: 3,
          icon: <WifiOutlined />,
          title: 'VOA英语教学'
        },
        {
          id: 4,
          icon: <TagsOutlined />,
          title: 'VOA慢速英语'
        },
        {
          id: 5,
          icon: <SoundOutlined />,
          title: 'VOA慢速英语'
        },
        {
          id: 6,
          icon: <ShakeOutlined />,
          title: 'VOA慢速英语'
        },
      ]
    }
  }

  componentDidMount() {

  }

  getMenuItems() {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id} icon={item.icon}>
          {item.title}
        </Menu.Item>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <img src={logo} className='app-header-logo' alt='logo'/>
        <Menu
          mode="horizontal"
          className='app-header-menu'
        >
          {this.getMenuItems()}
        </Menu>
      </Fragment>
    )
  }
}

export default AppHeader;
