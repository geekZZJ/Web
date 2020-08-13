import React, {Component} from "react";
import {Addtion, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper} from "./style"
import {CSSTransition} from "react-transition-group"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe655;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={this.state.focused}
              classNames="slide"
            >
              <NavSearch
                className={this.state.focused ? "focused" : ""}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              />
            </CSSTransition>
            <i className={this.state.focused ? "focused iconfont" : "iconfont"}>&#xe616;</i>
          </SearchWrapper>
          <Addtion>
            <Button className="writting">
              <i className="iconfont">&#xe613;</i>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </Addtion>
        </Nav>
      </HeaderWrapper>
    );
  }

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }

  handleInputBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header
