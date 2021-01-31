/*
 * @Author: zzj
 * @Date: 2021-01-28 22:16:44
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-31 13:58:26
 * @Description:
 */
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./pages/login";
import NoMatch from "./pages/nomatch";
import Admin from "./admin";
import Buttons from "./pages/ui/buttons";
import Modals from "./pages/ui/modals";
import Spins from "./pages/ui/spins";

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
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons}></Route>
                  <Route path="/admin/ui/modals" component={Modals}></Route>
                  <Route path="/admin/ui/spins" component={Spins}></Route>
                  <Route component={NoMatch}></Route>
                </Switch>
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
