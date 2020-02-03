<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <TodoHeader @addTodo="addTodo"/>
        <TodoList :todos="todos" :deleteTodo="deleteTodo"/>
        <todo-footer>
          <input type="checkbox" v-model="isAllCheck" slot="checkAll"/>
          <span slot="count">已完成{{completeSize}} / 全部{{todos.length}}</span>
          <button slot="delete" class="btn btn-danger" v-show="completeSize" @click="deleteCompleteTodos">清除已完成任务</button>
        </todo-footer>
      </div>
    </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'

export default {
  data () {
    return {
      // 从localStorage中读取todos
      todos: JSON.parse(window.localStorage.getItem('todos_key') || '[]')
    }
  },
  computed: {
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
  },
  watch: {
    // 深度监视
    todos: {
      deep: true,
      handler: function (value) {
        // 将todos最新的值的json数据，保存到localStorage
        window.localStorage.setItem('todos_key', JSON.stringify(value))
      }
    }
  },
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  },
  methods: {
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },
    // 删除所有选中的todo
    deleteCompleteTodos () {
      this.todos = this.todos.filter(todo => {
        return todo.complete === false
      })
    },
    // 全选/全不选 check为true or false
    selectAllTodos (check) {
      this.todos.forEach(todo => {
        todo.complete = check
      })
    }
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
