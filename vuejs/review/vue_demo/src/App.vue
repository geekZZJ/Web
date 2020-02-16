<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment"/>
      <List :comments="comments" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'

export default {
  data () {
    return {
      comments: [ // 数据在哪个组件，更新数据的行为(方法)就应该定义在哪个组件
        {
          name: 'Bob',
          content: 'Vue还不错'
        },
        {
          name: 'Cat',
          content: 'Vue so easy'
        },
        {
          name: 'BZ',
          content: 'Vue so so'
        }
      ]
    }
  },
  methods: {
    // 添加评论
    addComment (comment) {
      this.comments.unshift(comment)
    },
    // 删除指定下标评论
    deleteComment (index) {
      this.comments.splice(index, 1)
    }
  },
  components: {
    Add,
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
