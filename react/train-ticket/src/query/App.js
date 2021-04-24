/*
 * @Author: zzj
 * @Date: 2021-04-03 14:52:13
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-24 16:33:38
 * @Description:
 */
import React from "react";
import { connect } from "react-redux";
import "./App.css";

import Nav from "../common/Nav";
import List from "./List";
import Bottom from "./Bottom";

function App(props) {
  return (
    <div>
      <Nav></Nav>
      <List></List>
      <Bottom></Bottom>
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
