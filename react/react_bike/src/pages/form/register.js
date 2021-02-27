/*
 * @Author: zzj
 * @Date: 2021-02-27 17:08:27
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-27 19:44:47
 * @Description:
 */
import React from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Radio,
  InputNumber,
  Select,
  Switch,
} from "antd";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

class Register extends React.Component {
  onFinish = (values) => {
    console.log("Success:", values);
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="注册表单">
          <Form
            {...formItemLayout}
            initialValues={{
              age: 20,
              sex: "1",
              hobby: ["2"],
              marry: true,
            }}
            name="register"
            onFinish={this.onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="username"
              label="用户名"
              rules={[
                {
                  required: true,
                  message: "用户名不能为空！",
                  whitespace: true,
                },
              ]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              label="密码"
              rules={[
                {
                  required: true,
                  message: "密码不能为空！",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="请输入密码" />
            </Form.Item>
            <Form.Item
              name="sex"
              label="性别"
              rules={[
                {
                  required: true,
                  message: "性别为必选！",
                },
              ]}
            >
              <Radio.Group>
                <Radio value="0">男</Radio>
                <Radio value="1">女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item
              name="age"
              label="年龄"
              rules={[
                {
                  required: true,
                  message: "请输入你的年龄！",
                },
              ]}
            >
              <InputNumber min={1} max={200} />
            </Form.Item>
            <Form.Item name="hobby" label="爱好">
              <Select mode="multiple" allowClear placeholder="请选择你的爱好！">
                <Option value="1">游泳</Option>
                <Option value="2">跑步</Option>
                <Option value="3">爬山</Option>
                <Option value="4">唱歌</Option>
              </Select>
            </Form.Item>
            <Form.Item name="marry" label="已婚" valuePropName="checked">
              <Switch />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default Register;
