/*
 * @Author: zzj
 * @Date: 2021-01-30 16:39:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-30 18:09:44
 * @Description:
 */
import React from "react";
import { Card, Button } from "antd";
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
  };

  handleCloseLoading = () => {
    this.setState({
      loading: false,
    });
  };
  render() {
    return (
      <div>
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
        <Card title="按钮组"></Card>
      </div>
    );
  }
}

export default Buttons;
