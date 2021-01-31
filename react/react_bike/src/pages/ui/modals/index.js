/*
 * @Author: zzj
 * @Date: 2021-01-31 11:45:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-31 13:48:30
 * @Description:
 */
import React from "react";
import { Card, Button, Modal } from "antd";
import "./index.less";

class Modals extends React.Component {
  state = {
    isModalVisible1: false,
    isModalVisible2: false,
    isModalVisible3: false,
    isModalVisible4: false,
  };

  handleOpen = (type) => {
    this.setState({
      [type]: true,
    });
  };

  handleConfirm = (type) => {
    Modal[type]({
      title: "确认？",
      content: "are you sure?",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("cancel");
      },
    });
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="基础按钮">
          <Button
            type="primary"
            onClick={() => this.handleOpen("isModalVisible1")}
          >
            open
          </Button>
          <Button
            type="primary"
            onClick={() => this.handleOpen("isModalVisible2")}
          >
            自定义页脚
          </Button>
          <Button
            type="primary"
            onClick={() => this.handleOpen("isModalVisible3")}
          >
            顶部20px弹框
          </Button>
          <Button
            type="primary"
            onClick={() => this.handleOpen("isModalVisible4")}
          >
            水平垂直居中
          </Button>
        </Card>
        <Modal
          title="Basic Modal"
          visible={this.state.isModalVisible1}
          onCancel={() => this.setState({ isModalVisible1: false })}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="自定义页脚"
          okText="好的"
          cancelText="算了"
          visible={this.state.isModalVisible2}
          onCancel={() => this.setState({ isModalVisible2: false })}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="顶部20px"
          style={{ top: 20 }}
          visible={this.state.isModalVisible3}
          onCancel={() => this.setState({ isModalVisible3: false })}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Modal
          title="水平垂直居中"
          centered
          visible={this.state.isModalVisible4}
          onCancel={() => this.setState({ isModalVisible4: false })}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <Card title="信息确认框">
          <Button type="primary" onClick={() => this.handleConfirm("confirm")}>
            confirm
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("info")}>
            info
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("success")}>
            success
          </Button>
          <Button type="primary" onClick={() => this.handleConfirm("warning")}>
            warning
          </Button>
        </Card>
      </div>
    );
  }
}

export default Modals;
