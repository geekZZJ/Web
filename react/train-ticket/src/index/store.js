/*
 * @Author: zzj
 * @Date: 2021-04-03 14:53:52
 * @LastEditors: zzj
 * @LastEditTime: 2021-04-04 16:12:13
 * @Description:
 */
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

export default createStore(
  combineReducers(reducers),
  {
    from: "北京",
    to: "上海",
    isCitySelectorVisible: false,
    currentSelectingLeftCity: false,
    cityData: null,
    isLoadingCityData: false,
    isDateSelectorVisible: false,
    highSpeed: false,
    // departDate: "",
  },
  applyMiddleware(thunk)
);
