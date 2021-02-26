/*
 * @Author: zzj
 * @Date: 2021-02-26 14:42:37
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-26 16:11:25
 * @Description:
 */
import React from "react";
import { Card, Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 10,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 3,
    span: 10,
  },
};

class Login extends React.Component {
  formRef = React.createRef();
  onFinish = (values) => {
    console.log(values);
  };
  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="登录行内表单">
          <Form layout="inline">
            <Form.Item label="用户名" name="username1">
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item label="密码" name="password1">
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title="登录水平表单">
          <Form
            {...layout}
            ref={this.formRef}
            initialValues={{
              username2: "test",
              password2: "123",
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username2"
              rules={[
                {
                  required: true,
                  message: "请输入用户名",
                },
              ]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password2"
              rules={[
                {
                  required: true,
                  message: "请输入密码",
                },
                {
                  min: 5,
                  max: 10,
                  message: "长度不在范围内",
                },
              ]}
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Login;
