<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllComplete"/>
    </label>
    <span>已完成{{completeSize}} / 全部{{totalCount}}</span>
    <button class="btn btn-danger" v-show="completeSize" @click="clearAllCompleted">清除已完成任务</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  computed: {
    ...mapGetters(['totalCount', 'completeSize']),
    isAllComplete: {
      get () {
        return this.$store.getters.isAllComplete
      },
      set (value) { // value boolean类型
        this.$store.dispatch('selectAllTodos', value)
      }
    }
  },
  methods: {
    ...mapActions(['clearAllCompleted'])
  }
}
</script>

<style scoped>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
