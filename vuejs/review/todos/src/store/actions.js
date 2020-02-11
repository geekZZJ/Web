// 接收组件通知触发mutation调用间接状态方法的对象
import {ADD_TODO, DELETE_TODO, SELECT_ALL_TODOS, CLEAR_ALL_COMPLETED, RECEIVE_TODOS} from './mutation-types'
import storageUtil from '../util/storageUtil'

export default {
  addTodo ({commit}, todo) {
    // 提交mutation的请求
    commit(ADD_TODO, {todo})
  },
  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },
  selectAllTodos ({commit}, check) {
    commit(SELECT_ALL_TODOS, {check})
  },
  clearAllCompleted ({commit}) {
    commit(CLEAR_ALL_COMPLETED)
  },
  reqTodos ({commit}) {
    // 模拟
    setTimeout(() => {
      // 读取数据
      let todos = storageUtil.readTodos()
      // 提交mutation
      commit(RECEIVE_TODOS, todos)
    }, 1000)
  }
}
