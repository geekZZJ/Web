/*
 * @Author: zzj
 * @Date: 2021-02-04 22:15:19
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-04 22:30:55
 * @Description:
 */
import React from "react";
import { Card, Button, message } from "antd";

class Messages extends React.Component {
  showMessage = (type) => {
    message[type]("测试测试");
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="全局提示框">
          <Button onClick={() => this.showMessage("success")}>Success</Button>
          <Button onClick={() => this.showMessage("error")}>Error</Button>
          <Button onClick={() => this.showMessage("info")}>Info</Button>
          <Button onClick={() => this.showMessage("warning")}>Warning</Button>
          <Button onClick={() => this.showMessage("loading")}>Loading</Button>
        </Card>
      </div>
    );
  }
}

export default Messages;
