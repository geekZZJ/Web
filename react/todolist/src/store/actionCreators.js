import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, GET_INIT_LIST, INIT_LIST_ACTION} from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

/*export const getTodoList = () => {
  return (dispatch) => {
    axios.get("http://192.168.1.103:8080/todolist.json").then((res) => {
      const data = res.data
      const action = initListAction(data)
      dispatch(action)
    })
  }
}*/

export const getInitList = () => ({
  type: GET_INIT_LIST
})
