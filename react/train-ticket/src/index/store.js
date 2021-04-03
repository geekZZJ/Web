/*
 * @Author: zzj
 * @Date: 2021-04-03 14:53:52
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-03 16:18:15
 * @Description:
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export default createStore(
  combineReducers(reducers),
  {},
  applyMiddleware(thunk)
);
