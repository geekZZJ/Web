/*
 * @Author: zzj
 * @Date: 2021-01-31 13:56:03
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-31 14:17:23
 * @Description:
 */
import React from "react";
import { Card, Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.less";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} />;

class Spins extends React.Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="Spin用法">
          <Spin size="small" className="item" />
          <Spin className="item" />
          <Spin size="large" className="item" />
          <Spin indicator={antIcon} className="item" />
        </Card>
        <Card title="内容遮罩">
          <Spin tip="Loading...">
            <Alert
              message="Alert message title"
              description="Further details about the context of this alert."
              type="info"
            />
          </Spin>
        </Card>
      </div>
    );
  }
}

export default Spins;
