/*
 * @Author: zzj
 * @Date: 2021-06-20 22:25:55
 * @LastEditors: zzj
 * @LastEditTime: 2021-07-04 22:22:07
 * @Description:
 */
import React, { useState, useEffect } from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile';
import dayjs from 'dayjs';
import { history } from 'umi';

export default function (props) {
  const [selectedCity, setSelectedCity] = useState(['1001']);
  const [times, setTimes] = useState('可选时间');
  const [dateShow, setDateShow] = useState(false);
  const handleDate = () => {
    setDateShow(!dateShow);
  };

  const handleCityChange = (value) => {
    setSelectedCity(value);
  };

  const handleClick = () => {
    if (times.includes('~')) {
      history.push({
        pathname: '/search',
        query: {
          code: selectedCity,
          startTime: times.split('~')[0],
          endTime: times.split('~')[1],
        },
      });
    } else {
      Toast.fail('请选择时间');
    }
  };

  const handleDateConfirm = (startDateTime, endDateTime) => {
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
        {!props.citiesLoading && (
          <Picker
            data={props.cities}
            title="城市"
            cascade={false}
            value={selectedCity}
            cols={1}
            onChange={handleCityChange}
          >
            <List.Item>可选城市</List.Item>
          </Picker>
        )}
      </div>
      {/* 可选时间 */}
      <div className="search-time" onClick={handleDate}>
        <p className="search-time_left">出租时间</p>
        <p className="search-time_right">{times}</p>
      </div>
      {/* 点击按钮 */}
      <Button type="warning" size="large" onClick={handleClick}>
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
