import React from "react";
import {Addtion, Button, HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper} from "./style"
import {CSSTransition} from "react-transition-group"
import {connect} from "react-redux"

const Header = (props) => {
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
            in={props.focused}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>&#xe616;</i>
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
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: "search_focus"
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: "search_blur"
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
