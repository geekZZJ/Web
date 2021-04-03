/*
 * @Author: zzj
 * @Date: 2021-04-03 14:50:12
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-03 16:41:30
 * @Description:
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css";
import reportWebVitals from "./reportWebVitals";

import store from "./store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
