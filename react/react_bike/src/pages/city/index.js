/*
 * @Author: zzj
 * @Date: 2021-03-04 14:24:05
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-08 10:18:27
 * @Description:
 */
import React from "react";
import { Card, Table, Button, Form, Select } from "antd";

const { Option } = Select;
const columns = [
  {
    title: "城市ID",
    dataIndex: "id",
  },
  {
    title: "城市名称",
    dataIndex: "name",
  },
  {
    title: "用车模式",
    dataIndex: "use",
  },
  {
    title: "运营模式",
    dataIndex: "operating",
  },
  {
    title: "授权加盟商",
    dataIndex: "join",
  },
  {
    title: "城市管理员",
    dataIndex: "manager",
  },
  {
    title: "城市开通时间",
    dataIndex: "openTime",
  },
  {
    title: "操作时间",
    dataIndex: "operateTime",
  },
  {
    title: "操作人",
    dataIndex: "operator",
  },
];

class BasicTable extends React.Component {
  state = {
    list: [],
  };
  // 开通城市
  handleOpenCity = () => {};

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card>
          <FilterForm></FilterForm>
        </Card>
        <Card>
          <Button type="primary" onClick={this.handleOpenCity}>
            开通城市
          </Button>
          <Table columns={columns} dataSource={this.state.list}></Table>
        </Card>
      </div>
    );
  }
}

class FilterForm extends React.Component {
  render() {
    return (
      <Form
        layout="inline"
        initialValues={{
          city: "0",
          use: "0",
          operating: "0",
          join: "0",
        }}
      >
        <Form.Item label="城市" name="city">
          <Select style={{ width: 100 }}>
            <Option value="0">全部</Option>
            <Option value="1">北京市</Option>
            <Option value="2">天津市</Option>
            <Option value="3">深圳市</Option>
          </Select>
        </Form.Item>
        <Form.Item label="用车模式" name="use">
          <Select style={{ width: 130 }}>
            <Option value="0">全部</Option>
            <Option value="1">指定停车点模式</Option>
            <Option value="2">禁停区模式</Option>
          </Select>
        </Form.Item>
        <Form.Item label="运营模式" name="operating">
          <Select style={{ width: 100 }}>
            <Option value="0">全部</Option>
            <Option value="1">自营</Option>
            <Option value="2">加盟</Option>
          </Select>
        </Form.Item>
        <Form.Item label="加盟商授权状态" name="join">
          <Select style={{ width: 100 }}>
            <Option value="0">全部</Option>
            <Option value="1">已授权</Option>
            <Option value="2">未授权</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default BasicTable;
