import {fromJS} from "immutable"
import * as contants from "./constants";

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.CHANGE_LOGIN:
      return state.set("login", action.value)
    case contants.LOGOUT:
      return state.set("login", action.value)
    default:
      return state
  }
}