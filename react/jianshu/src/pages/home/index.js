import React, {PureComponent} from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {BackTop, HomeLeft, HomeRight, HomeWrapper} from "./style";
import {connect} from "react-redux";
import {actionCreator} from "./store"

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img"
               src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3321099407,2075496001&fm=26&gp=0.jpg"
               alt=""/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow)
  }
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
})

const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreator.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreator.toggleTopShow(true))
    } else {
      dispatch(actionCreator.toggleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home)