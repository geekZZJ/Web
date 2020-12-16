/*
 * @Author: zzj
 * @Date: 2020-12-15 17:53:42
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-16 10:19:06
 * @Description:
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  CheckSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class SideNav extends Component {
  render() {
    return (
      <div>
        <Menu
          mode="inline"
          theme={"dark"}
          defaultOpenKeys={["sub1", "sub2", "sub3"]}
          defaultSelectedKeys={["0"]}
        >
          <Menu.Item key="0" icon={<HomeOutlined />}>
            <Link to="/">首页</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="商品">
            <Menu.Item key="1">
              <Link to="/product">商品管理</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/class">品类管理</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<CheckSquareOutlined />} title="订单">
            <Menu.Item key="3">
              <Link to="/order">订单管理</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="用户">
            <Menu.Item key="4">
              <Link to="/user">用户列表</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default SideNav;
