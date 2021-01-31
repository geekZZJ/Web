/*
 * @Author: zzj
 * @Date: 2021-01-30 16:39:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-31 14:27:50
 * @Description:
 */
import React from "react";
import { Card, Button, Radio } from "antd";
import {
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import "./index.less";

class Buttons extends React.Component {
  state = {
    loading: true,
    size: "default",
  };

  handleCloseLoading = () => {
    this.setState({
      loading: false,
    });
  };

  handleChange = (e) => {
    this.setState({
      size: e.target.value,
    });
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="基础按钮">
          <Button type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <Button type="primary" danger>
            Danger
          </Button>
          <Button disabled>Default(disabled)</Button>
        </Card>
        <Card title="图标按钮">
          <Button type="primary" icon={<PlusOutlined />}>
            新建
          </Button>
          <Button icon={<EditOutlined />}>编辑</Button>
          <Button type="dashed" icon={<DeleteOutlined />}>
            删除
          </Button>
          <Button type="primary" danger icon={<SearchOutlined />}>
            搜索
          </Button>
          <Button disabled icon={<DownloadOutlined />}>
            下载
          </Button>
          <Button shape="circle" icon={<SearchOutlined />}></Button>
        </Card>
        <Card title="loading按钮">
          <Button type="primary" loading={this.state.loading}>
            确定
          </Button>
          <Button type="primary" shape="circle" loading></Button>
          <Button loading>点击加载</Button>
          <Button type="primary" onClick={this.handleCloseLoading}>
            关闭
          </Button>
        </Card>
        <Card title="按钮尺寸">
          <Radio.Group onChange={this.handleChange} value={this.state.size}>
            <Radio value="large">大</Radio>
            <Radio value="default">中</Radio>
            <Radio value="small">小</Radio>
          </Radio.Group>
          <Button type="primary" size={this.state.size}>
            Primary Button
          </Button>
          <Button size={this.state.size}>Default Button</Button>
          <Button type="dashed" size={this.state.size}>
            Dashed Button
          </Button>
        </Card>
      </div>
    );
  }
}

export default Buttons;
