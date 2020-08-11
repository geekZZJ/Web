import React, {Component} from "react";
import {Addtion, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper} from "./style"

class Header extends Component {
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
            <NavSearch/>
            <i className="iconfont">&#xe616;</i>
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
}

export default Header
