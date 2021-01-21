/*
 * @Author: zzj
 * @Date: 2021-01-21 16:17:24
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-21 16:51:59
 * @Description:
 */
import { Col, Row } from "antd";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

class Admin extends React.Component {
  render() {
    return (
      <Row>
        <Col span={3}>left</Col>
        <Col span={21}>
          <Header></Header>
          <Row>content</Row>
          <Footer></Footer>
        </Col>
      </Row>
    );
  }
}

export default Admin;
