/*
 * @Author: zzj
 * @Date: 2021-01-21 16:16:01
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-30 16:46:09
 * @Description:
 */
import React from "react";
import { NavLink } from "react-router-dom";
import MenuConfig from "../../config/menuConfig";
import { Menu } from "antd";
import "./index.less";

const { SubMenu } = Menu;

class NavLeft extends React.Component {
  state = {};

  componentDidMount() {
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode,
    });
  }

  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {this.renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="logo">
          <img src="/assets/logo_ant.svg" alt="logo" />
          <h1>Admin</h1>
        </div>
        <Menu mode="vertical" theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}

export default NavLeft;
