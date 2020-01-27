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
      <Add/>
      <List :comments="comments"/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add'
import List from './components/List'

export default {
  data () {
    return {
      comments: [
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
