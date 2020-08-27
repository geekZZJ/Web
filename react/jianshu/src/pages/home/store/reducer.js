import {fromJS} from "immutable"
import * as contants from "./constants";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case contants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      })
    case contants.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.nextPage
      })
    default:
      return state
  }
}