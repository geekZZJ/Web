/*
 * @Author: zzj
 * @Date: 2021-03-04 10:55:17
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-04 11:13:43
 * @Description:
 */
import React from "react";
import { Card, Table } from "antd";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    width: 80,
    fixed: "left",
  },
  {
    title: "用户名",
    dataIndex: "username",
    width: 150,
  },
  {
    title: "性别",
    dataIndex: "gender",
    width: 80,
  },
  {
    title: "状态",
    dataIndex: "state",
    width: 80,
  },
  {
    title: "爱好",
    dataIndex: "hobby",
    width: 80,
  },
  {
    title: "生日",
    dataIndex: "birthday",
    width: 120,
  },
  {
    title: "地址",
    dataIndex: "address",
  },
];

const data = [
  {
    id: 1,
    username: "John Brown",
    gender: "男",
    state: 0,
    hobby: "test",
    birthday: "19980226",
    address: "New York No. 1 Lake Park",
  },
  {
    id: 2,
    username: "John Brown1",
    gender: "女",
    state: 1,
    hobby: "test1",
    birthday: "19980226",
    address: "New York No. 2 Lake Park",
  },
  {
    id: 3,
    username: "John Brown1",
    gender: "女",
    state: 1,
    hobby: "test1",
    birthday: "19980226",
    address: "New York No. 2 Lake Park",
  },
  {
    id: 4,
    username: "John Brown1",
    gender: "女",
    state: 1,
    hobby: "test1",
    birthday: "19980226",
    address: "New York No. 2 Lake Park",
  },
];

class HighTable extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="头部固定">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey="id"
            scroll={{ y: 240 }}
          ></Table>
        </Card>
        <Card title="左侧固定">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey="id"
            scroll={{ x: 1300 }}
          ></Table>
        </Card>
      </div>
    );
  }
}

export default HighTable;
