/*
 * @Author: zzj
 * @Date: 2021-02-26 11:34:47
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-26 14:10:35
 * @Description:
 */
import React from "react";
import { Card, Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const imgStyle = {
  width: "100%",
};

class Carousels extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="文字背景轮播图">
          <Carousel autoplay effect="fade">
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
          </Carousel>
        </Card>
        <Card title="图片背景轮播图">
          <Carousel autoplay>
            <div>
              <img src="/carousel-img/1.jpg" alt="" style={imgStyle}></img>
            </div>
            <div>
              <img src="/carousel-img/2.jpg" alt="" style={imgStyle}></img>
            </div>
            <div>
              <img src="/carousel-img/3.jpg" alt="" style={imgStyle}></img>
            </div>
          </Carousel>
        </Card>
      </div>
    );
  }
}

export default Carousels;
