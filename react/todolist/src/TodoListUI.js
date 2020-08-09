import React, {Fragment} from "react";
import {Button, Input, List} from "antd";

// 无状态组件
const TodoListUI = (props) => {
  return (
    <Fragment>
      <Fragment>
        <Input value={props.inputValue}
               placeholder="Todo Info"
               style={{width: '300px', marginRight: '10px'}}
               onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      </Fragment>
      <List
        style={{marginTop: "10px", width: "380px"}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => {
            props.handleItemDelete(index)
          }}>{item}</List.Item>
        )}
      />
    </Fragment>
  )
}

/*class TodoListUI extends Component {
  render() {
    return (
      <Fragment>
        <Fragment>
          <Input value={this.props.inputValue}
                 placeholder="Todo Info"
                 style={{width: '300px', marginRight: '10px'}}
                 onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
        </Fragment>
        <List
          style={{marginTop: "10px", width: "380px"}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={(index) => {
              this.props.handleItemDelete(index)
            }}>{item}</List.Item>
          )}
        />
      </Fragment>
    )
  }
}*/

export default TodoListUI
