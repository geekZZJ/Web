import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {Button, Input, LoginBox, LoginWrapper} from "./style";
import {actionCreator} from "./store"
import {Redirect} from "react-router-dom"

class Login extends PureComponent {
  render() {
    const {login, loginStatus} = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => {
              this.account = input
            }}></Input>
            <Input placeholder="密码" type="password" ref={(input) => {
              this.password = input
            }}></Input>
            <Button onClick={() => login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/"/>
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
})

const mapDispatch = dispatch => ({
  login(accountEle, passwordEle) {
    dispatch(actionCreator.login(accountEle.value, passwordEle.value))
  }
})

export default connect(mapState, mapDispatch)(Login)