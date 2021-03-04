/*
 * @Author: zzj
 * @Date: 2021-03-03 16:55:48
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-04 10:49:10
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
];

class Login extends React.Component {
  state = {
    selectedRowKeys: [],
  };
  onRowClick = (record) => {
    const selectKey = [...this.state.selectedRowKeys];
    if (selectKey.includes(record.id)) {
      selectKey.splice(selectKey.indexOf(record.id), 1);
    } else {
      selectKey.push(record.id);
    }
    this.setState({
      selectedRowKeys: selectKey,
    });
  };
  render() {
    const { selectedRowKeys } = this.state;
    return (
      <div style={{ width: "100%" }}>
        <Card title="基础表格">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            rowKey="id"
          ></Table>
        </Card>
        <Card title="表格操作">
          <Table
            rowKey="id"
            rowSelection={{
              selectedRowKeys,
            }}
            bordered
            columns={columns}
            dataSource={data}
            pagination={false}
            onRow={(record) => {
              return {
                onClick: () => {
                  this.onRowClick(record);
                },
              };
            }}
          ></Table>
        </Card>
      </div>
    );
  }
}

export default Login;
