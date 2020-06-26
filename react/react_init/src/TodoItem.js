import React, {Component} from "react";


class TodoItem extends Component {
  constructor() {
    super();

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick() {
    console.log(this);
  }

  render() {
    const {content} = this.props;
    return <li onClick={this.handleItemClick}>{content}</li>
  }
}

export default TodoItem;
