<template>
  <div class="container">
    <Search/>
    <UsersMain/>
  </div>
</template>

<script>
import Search from './components/Search'
import Main from './components/Main'
export default {
  name: 'App',
  components: {
    Search,
    UsersMain: Main
  }
}
</script>

<style>

</style>
