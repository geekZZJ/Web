/*
 * @Author: zzj
 * @Date: 2020-12-15 17:53:42
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-16 09:18:17
 * @Description:
 */
import React, { Component } from "react";
import { Layout } from "antd";
import "./index.css";
import TopNav from "../topnav";
import SideNav from "../sidenav";

const { Header, Sider, Content } = Layout;

class Layout1 extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider width={230}>
          <div className="logo">logo</div>
          <SideNav></SideNav>
        </Sider>
        <Layout>
          <Header className="header">
            <TopNav></TopNav>
          </Header>
          <Content>{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default Layout1;
