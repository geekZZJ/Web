import React, {Component} from "react";
import {Addtion, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch} from "./style"

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
          <NavSearch/>
          <Addtion>
            <Button className="writting">写文章</Button>
            <Button className="reg">注册</Button>
          </Addtion>
        </Nav>
      </HeaderWrapper>
    );
  }
}

export default Header
