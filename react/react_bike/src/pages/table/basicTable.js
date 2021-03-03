/*
 * @Author: zzj
 * @Date: 2021-03-03 16:55:48
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-03 21:04:13
 * @Description:
 */
import React from "react";
import { Card, Table } from "antd";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "用户名",
    dataIndex: "username",
  },
  {
    title: "性别",
    dataIndex: "gender",
  },
  {
    title: "状态",
    dataIndex: "state",
  },
  {
    title: "爱好",
    dataIndex: "hobby",
  },
  {
    title: "生日",
    dataIndex: "birthday",
  },
  {
    title: "地址",
    dataIndex: "address",
  },
];
const data = [
  {
    id: "1",
    username: "John Brown",
    gender: "男",
    state: 0,
    hobby: "test",
    birthday: "19980226",
    address: "New York No. 1 Lake Park",
  },
];

class Login extends React.Component {
  state = {
    data2: [],
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="基础表格">
          <Table columns={columns} dataSource={data} pagination={false}></Table>
        </Card>
        <Card title="动态数据渲染表格">
          <Table
            columns={columns}
            dataSource={this.state.data2}
            pagination={false}
          ></Table>
        </Card>
      </div>
    );
  }
}

export default Login;
