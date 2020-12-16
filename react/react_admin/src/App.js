/*
 * @Author: zzj
 * @Date: 2020-12-15 15:15:35
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-16 10:49:24
 * @Description:
 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./page/home";
import Layout1 from "./components/layout";
import Login from "./page/login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route
            path="/"
            render={(props) => (
              <Layout1>
                <Route exact path="/" component={Home}></Route>
                <Route path="/product" component={Home}></Route>
                <Route path="/class" component={Home}></Route>
                <Route path="/order" component={Home}></Route>
                <Route path="/user" component={Home}></Route>
              </Layout1>
            )}
          ></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
