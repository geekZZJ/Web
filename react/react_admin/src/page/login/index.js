/*
 * @Author: zzj
 * @Date: 2020-12-16 10:37:51
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-16 14:41:03
 * @Description:
 */
import React, { Component } from "react";
import "./index.css";
import { Form, Input, Button, message } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = () => {
  message.warning("请输入必填字段");
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onValuesChange(changedValues, allValues) {
    const { username, password } = allValues;
    this.setState({
      username,
      password,
    });
  }

  render() {
    return (
      <div className="login">
        <div className="main">
          <div className="title">商品管理系统</div>
          <Form
            {...layout}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={this.onValuesChange.bind(this)}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: "用户名必填",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: "密码必填",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
