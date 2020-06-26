import React, {Component} from 'react';
import {Button} from 'antd';
import {Link} from "react-router-dom";

class NewButton extends Component {
  render() {
    return (
      <Link to='/list/123'>
        <Button type="primary">按钮</Button>
      </Link>
    );
  }
}

export default NewButton;
