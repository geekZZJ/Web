import React, {Component} from "react";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import {connect} from "react-redux";
import {actionCreator} from "./store"

class Home extends Component {
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
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatch = dispatch => ({
  changeHomeData() {
    const action = actionCreator.getHomeInfo()
    dispatch(action)
  }
})

export default connect(null, mapDispatch)(Home)