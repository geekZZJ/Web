/*
 * @Author: zzj
 * @Date: 2021-01-31 14:36:19
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-31 15:16:04
 * @Description:
 */
import React from "react";
import { Card, Button, notification } from "antd";
// import "./index.less";

class Notifications extends React.Component {
  openNotification = (type, direction = "topRight") => {
    notification[type]({
      message: "标题",
      description: "内容内容内容内容",
      placement: direction,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="通知提醒框">
          <Button type="primary" onClick={() => this.openNotification("open")}>
            default
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("success")}
          >
            success
          </Button>
          <Button type="primary" onClick={() => this.openNotification("error")}>
            error
          </Button>
          <Button type="primary" onClick={() => this.openNotification("info")}>
            info
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("warning")}
          >
            warning
          </Button>
        </Card>
        <Card title="通知提醒框">
          <Button
            type="primary"
            onClick={() => this.openNotification("open", "topLeft")}
          >
            default
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("success", "topRight")}
          >
            success
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("error", "bottomLeft")}
          >
            error
          </Button>
          <Button
            type="primary"
            onClick={() => this.openNotification("info", "bottomRight")}
          >
            info
          </Button>
        </Card>
      </div>
    );
  }
}

export default Notifications;
