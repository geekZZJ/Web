/*
 * @Author: zzj
 * @Date: 2021-01-28 22:16:44
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-30 17:58:38
 * @Description:
 */
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
// import NoMatch from "./pages/nomatch";

class IRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login}></Route>
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Route path="/admin/ui/buttons" component={Buttons}></Route>
                {/* <Route component={NoMatch}></Route> */}
              </Admin>
            )}
          ></Route>
          <Route path="/order/detail" component={Login}></Route>
        </App>
      </HashRouter>
    );
  }
}

export default IRouter;
