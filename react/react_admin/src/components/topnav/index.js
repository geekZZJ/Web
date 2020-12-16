/*
 * @Author: zzj
 * @Date: 2020-12-15 21:34:13
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-16 09:44:13
 * @Description:
 */
import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        <LogoutOutlined /> 退出登录
      </a>
    </Menu.Item>
  </Menu>
);
class TopNav extends Component {
  render() {
    return (
      <Dropdown overlay={menu}>
        <a href style={{ float: "right" }} onClick={(e) => e.preventDefault()}>
          欢迎，admin <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}

export default TopNav;
