import {fromJS} from "immutable"
import * as contants from "./constants";

const defaultState = fromJS({
  title: "",
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}

