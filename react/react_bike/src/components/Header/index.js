/*
 * @Author: zzj
 * @Date: 2021-01-21 16:14:01
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-23 21:17:34
 * @Description:
 */
import React from "react";
import { Col, Row } from "antd";
import "./index.less";
import dayjs from "dayjs";

class Header extends React.Component {
  state = {
    userName: "河畔一角",
  };

  componentDidMount() {
    setInterval(() => {
      let sysTime = dayjs(new Date().getTime()).format("YYYY-MM-DD HH:mm:ss");
      this.setState({
        sysTime,
      });
    }, 1000);
    this.getWeatherApiData();
  }

  async getWeatherApiData() {
    // const district_id = "510100";
    // const ak = "dgjMDGj8xkKn04oV1HlgGGFTflBeqYin";
    // const result = await axios.jsonp({
    //   url: `http://api.map.baidu.com/weather/v1/?district_id=${district_id}&data_type=all&ak=${ak}`,
    // });
    this.setState({
      weather: "霾",
    });
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={18} className="breadcrumb-title">
            首页
          </Col>
          <Col span={6} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Header;
