<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader/>
        <TodoList/>
        <todo-footer></todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

// import storageUtil from './util/storageUtil'

export default {
  /* data () {
    return {
      // 从localStorage中读取todos
      todos: storageUtil.readTodos()
    }
  }, */
  /* computed: {
    completeSize () {
      return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
    },
    isAllCheck: {
      get () {
        return this.completeSize === this.todos.length && this.completeSize > 0
      },
      set (value) {
        // value是当前checkbox最新的值
        this.selectAllTodos(value)
      }
    }
  }, */
  /* watch: {
    // 深度监视
    todos: {
      deep: true,
      /!* handler: function (value) {
        // 将todos最新的值的json数据，保存到localStorage
        storageUtil.saveTodos(value)
      } *!/
      handler: storageUtil.saveTodos
    }
  }, */
  mounted () {
    // 发送命令：异步获取保存todos数据并显示
    this.$store.dispatch('reqTodos')
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
}
</script>

<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
