/*
 * @Author: zzj
 * @Date: 2021-01-21 16:17:24
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-22 15:50:55
 * @Description:
 */
import "./style/common.less";
import { Col, Row } from "antd";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavLeft from "./components/NavLeft";

class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span={4} className="nav-left">
          <NavLeft></NavLeft>
        </Col>
        <Col span={20} className="main">
          <Header></Header>
          <Row className="content">content</Row>
          <Footer></Footer>
        </Col>
      </Row>
    );
  }
}

export default Admin;
