/*
 * @Author: zzj
 * @Date: 2021-06-20 22:25:55
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-21 21:55:45
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import { Picker, List, Calendar, Button } from 'antd-mobile';
import dayjs from 'dayjs';

export default function (props) {
  const [cities, setCities] = useState([
    [
      { label: '杭州', value: '1001' },
      { label: '苏州', value: '1002' },
    ],
  ]);
  const [selectedCity, setSelectedCity] = useState(['1001']);
  const [times, setTimes] = useState('可选时间');
  const [dateShow, setDateShow] = useState(false);
  const handleDate = () => {
    setDateShow(!dateShow);
  };

  const handleCityChange = (value) => {
    // console.log('value', value);
    setSelectedCity(value);
  };

  const handleDateConfirm = (startDateTime, endDateTime) => {
    // console.log(startDateTime, endDateTime);
    setDateShow(!dateShow);
    setTimes(
      dayjs(startDateTime).format('YYYY-MM-DD') +
        '~' +
        dayjs(endDateTime).format('YYYY-MM-DD'),
    );
  };
  useEffect(() => {}, []);
  return (
    <div className="search">
      {/* 可选城市 */}
      <div className="search-addr">
        <Picker
          data={cities}
          title="城市"
          cascade={false}
          value={selectedCity}
          cols={1}
          onChange={handleCityChange}
          // onOk={v => this.setState({ sValue: v })}
        >
          <List.Item>可选城市</List.Item>
        </Picker>
      </div>
      {/* 可选时间 */}
      <div className="search-time" onClick={handleDate}>
        <p className="search-time_left">出租时间</p>
        <p className="search-time_right">{times}</p>
      </div>
      {/* 点击按钮 */}
      <Button type="warning" size="large">
        搜索民宿
      </Button>
      <Calendar
        visible={dateShow}
        onCancel={handleDate}
        onConfirm={handleDateConfirm}
      ></Calendar>
    </div>
  );
}
