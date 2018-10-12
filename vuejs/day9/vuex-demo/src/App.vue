<template>
  <div id="app">
    <h3>welcome vuex-demo</h3>
    <input type="button" name="" value="增加" @click="increment">
    <div>
      现在数字为：{{count}}
    </div>
  </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default{
      computed:mapGetters([
          'count'
        ]),
      methods:mapActions([
          'increment'
        ])
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
