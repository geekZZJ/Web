<template>
  <div class="edit">
    <edit-header></edit-header>
    <edit-body></edit-body>
  </div>
</template>

<script>
import axios from 'axios'
import EditHeader from '@/components/EditHeader'
import EditBody from '@/components/EditBody'
export default {
  components: {
    EditHeader,
    EditBody
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      axios.get('/users/checkLogin').then((response) => {
        let res = response.data
        console.log(res)
        if (res.status === '0') {
          console.log(res.result)
        }
      })
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
</style>
