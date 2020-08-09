import {takeEvery, put} from 'redux-saga/effects'
import {GET_INIT_LIST} from "./actionTypes";
import axios from "axios"
import {initListAction} from "./actionCreators"

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

function* getInitList() {
  try {
    const res = yield axios.get("http://192.168.1.103:8080/todolist.json")
    const action = initListAction(res.data)
    yield put(action)
  } catch (e) {
    console.log(e)
  }
}

export default mySaga;
