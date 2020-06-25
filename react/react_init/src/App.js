import React, {Component, Fragment} from 'react';

/*function App() {
  return (
    <div>TodoList</div>
  );
}*/
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: 'hello',
      list: ['learn 1', 'learn 2']
    }
  }

  handleInputChange(e) {
    // console.log(e.target.value);
    // console.log(this);
    this.setState({
      inputValue: e.target.value
    })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      const list = [...this.state.list, this.state.inputValue];
      this.setState({
        list
      })
    }
  }

  render() {
    return (
      <Fragment>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
        />
        <ul>
          {
            this.state.list.map((value, index) => {
              return <li key={index}>{value}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default App;
