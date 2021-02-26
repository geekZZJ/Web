/*
 * @Author: zzj
 * @Date: 2021-02-26 10:26:46
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-26 11:28:49
 * @Description:
 */
import React from "react";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

class Gallery extends React.Component {
  render() {
    const imgs = [
      ["1.png", "2.png", "3.png", "4.png", "5.png"],
      ["6.png", "7.png", "8.png", "9.png", "10.png"],
      ["11.png", "12.png", "13.png", "14.png", "15.png"],
      ["16.png", "17.png", "18.png", "19.png", "20.png"],
      ["21.png", "22.png", "23.png", "24.png", "25.png"],
    ];
    const imgList = imgs.map((list) => {
      return list.map((item, index) => (
        <Card
          key={index}
          cover={<img alt="example" src={`/gallery/${item}`} />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      ));
    });
    return (
      <div style={{ width: "100%" }}>
        <Row>
          <Col span={5}>{imgList[0]}</Col>
          <Col span={5}>{imgList[1]}</Col>
          <Col span={5}>{imgList[2]}</Col>
          <Col span={5}>{imgList[3]}</Col>
          <Col span={4}>{imgList[4]}</Col>
        </Row>
      </div>
    );
  }
}

export default Gallery;
