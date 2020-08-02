import React, {Component, Fragment} from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          {/*下面是一个input框*/}
          <input type="text"
                 value={this.state.inputValue}
                 onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
          })}
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    // console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    if (this.state.inputValue !== "") {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ""
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
