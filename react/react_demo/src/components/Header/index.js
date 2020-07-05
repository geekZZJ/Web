import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
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
          icon: <WifiOutlined/>,
          title: 'VOA英文教学'
        },
        {
          id: 4,
          icon: <TagsOutlined/>,
          title: '走遍美国'
        },
        {
          id: 5,
          icon: <SoundOutlined/>,
          title: '空中英语教室'
        },
        {
          id: 6,
          icon: <ShakeOutlined/>,
          title: '大家说英语'
        },
      ]
    }
  }

  componentDidMount() {
    axios.get('http://www.dell-lee.com/react/api/header.json').then(res => {
      console.log(res.data.data);
      /*this.setState({
        list:res.data.data
      })*/
    })
  }

  getMenuItems() {
    return this.state.list.map(item => {
      return (
        <Menu.Item key={item.id} icon={item.icon}>
          <Link to={`/${item.id}`}>
            {item.title}
          </Link>
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
