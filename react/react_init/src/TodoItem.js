import React, {Component} from "react";


class TodoItem extends Component {
  constructor() {
    super();

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    // 改变父组件中的list数据
    // console.log(this);
    // 子组件想要和父组件通信，要调用父组件传递过来的方法
    const {deleteFunction, index} = this.props;
    deleteFunction(index);
  }

  render() {
    const {content} = this.props;
    return <li onClick={this.handleItemClick}>{content}</li>
  }
}

export default TodoItem;
