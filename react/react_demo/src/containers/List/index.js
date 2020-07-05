import React, {Component} from "react";
import axios from 'axios';
import {List} from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class PageList extends Component {
  componentWillReceiveProps(nextProps, nextContext) {
    // console.log(nextProps.match.params.id);
    const id = nextProps.match.params.id;
    axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id).then(res => {
      // console.log(res.data.data);
      this.setState({
        data: res.data.data
      })
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <List
        style={{backgroundColor: '#fff'}}
        bordered
        dataSource={this.state.data}
        renderItem={item => (
          <List.Item>
            {item.title}
          </List.Item>
        )}
      />
    )
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get('http://www.dell-lee.com/react/api/list.json?id=' + id).then(res => {
      // console.log(res.data.data);
      this.setState({
        data: res.data.data
      })
    })
  }
}

export default PageList;
