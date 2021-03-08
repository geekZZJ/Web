/*
 * @Author: zzj
 * @Date: 2021-03-08 16:15:50
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-08 16:32:49
 * @Description:
 */
import { createStore } from "redux";
import reducer from "../reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

export default (prevState) => createStore(reducer, prevState);
