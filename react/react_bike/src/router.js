/*
 * @Author: zzj
 * @Date: 2021-01-28 22:16:44
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-08 10:16:34
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
import Notifications from "./pages/ui/notifications";
import Messages from "./pages/ui/messages";
import Tabs from "./pages/ui/tabs";
import Gallery from "./pages/ui/gallery";
import Carousels from "./pages/ui/carousels";
import FormLogin from "./pages/form/login";
import Register from "./pages/form/register";
import BasicTable from "./pages/table/basicTable";
import HighTable from "./pages/table/highTable";
import City from "./pages/city";
import Bar from "./pages/echarts/bar";

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
                  <Route
                    path="/admin/ui/notifications"
                    component={Notifications}
                  ></Route>
                  <Route path="/admin/ui/messages" component={Messages}></Route>
                  <Route path="/admin/ui/tabs" component={Tabs}></Route>
                  <Route path="/admin/ui/gallery" component={Gallery}></Route>
                  <Route
                    path="/admin/ui/carousel"
                    component={Carousels}
                  ></Route>
                  <Route path="/admin/form/login" component={FormLogin}></Route>
                  <Route path="/admin/form/reg" component={Register}></Route>
                  <Route
                    path="/admin/table/basic"
                    component={BasicTable}
                  ></Route>
                  <Route path="/admin/table/high" component={HighTable}></Route>
                  <Route path="/admin/city" component={City}></Route>
                  <Route path="/admin/charts/bar" component={Bar}></Route>
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
