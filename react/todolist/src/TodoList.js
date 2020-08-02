import React, {Component, Fragment} from 'react';
import './style.css'
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          {/*下面是一个input框*/}
          <label htmlFor="insert">输入内容</label>
          <input type="text"
                 id="insert"
                 className="input"
                 value={this.state.inputValue}
                 onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    // console.log(e.target.value)
    /*this.setState({
      inputValue: e.target.value
    })*/
    const value = e.target.value
    this.setState(() => {
      return {
        inputValue: value
      }
    })
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handleBtnClick() {
    if (this.state.inputValue !== "") {
      /*this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ""
      })*/
      this.setState((prevState) => {
        return {
          list: [...prevState.list, prevState.inputValue],
          inputValue: ""
        }
      })
    } else {
      alert("内容不能为空！")
    }
  }

  handleItemDelete(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList;
