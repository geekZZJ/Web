// 包含所有基于state的getter计算属性的对象
export default {
  // 总数量
  totalCount (state) {
    return state.todos.length
  },
  // 完成的数量
  completeSize (state) {
    return state.todos.reduce((preTotal, todo) => {
      return preTotal + (todo.complete ? 1 : 0)
    }, 0)
  },

  // 判断是否全部选中
  isAllComplete (state, getters) {
    return getters.completeSize === getters.completeSize && state.todos.length > 0
  }
}
