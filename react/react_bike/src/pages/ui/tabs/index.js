/*
 * @Author: zzj
 * @Date: 2021-02-13 21:01:57
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-26 10:08:30
 * @Description:
 */
import React from "react";
import { Card, Tabs } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

class Tab extends React.Component {
  newTabIndex = 0;

  state = {
    panes: [],
  };

  componentDidMount() {
    const initialPanes = [
      { title: "Tab 1", content: "Content of Tab 1", key: "1" },
      { title: "Tab 2", content: "Content of Tab 2", key: "2" },
      {
        title: "Tab 3",
        content: "Content of Tab 3",
        key: "3",
      },
    ];
    this.setState({
      panes: initialPanes,
      activeKey: initialPanes[0].key,
    });
  }

  callback = (key) => {
    console.log(key);
  };

  onChange = (activeKey) => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    console.log(targetKey, action);
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    const newPanes = [...panes];
    newPanes.push({
      title: `New Tab${this.newTabIndex}`,
      content: `Content of new Tab${this.newTabIndex}`,
      key: activeKey,
    });
    this.setState({
      panes: newPanes,
      activeKey,
    });
  };

  remove = (targetKey) => {
    const { panes, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    this.setState({
      panes: newPanes,
      activeKey: newActiveKey,
    });
  };

  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="Tab用法">
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2" disabled>
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Card>
        <Card title="Tab图标页签">
          <Tabs defaultActiveKey="2">
            <TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Tab 1
                </span>
              }
              key="1"
            >
              Content of Tab Pane 1
            </TabPane>
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Tab 2
                </span>
              }
              key="2"
            >
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </Card>
        <Card title="新增和关闭页签">
          <Tabs
            type="editable-card"
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            onEdit={this.onEdit}
          >
            {this.state.panes.map((pane) => (
              <TabPane tab={pane.title} key={pane.key}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default Tab;
