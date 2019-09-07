<template>
  <div>
    <nav-header class="nav"></nav-header>
    <div class="list">
      <thing-item></thing-item>
    </div>
    <New class="edit" @click.native="edit"></New>
  </div>
</template>

<script>
import axios from 'axios'
import NavHeader from '@/components/Header'
import ThingItem from '@/components/ThingItem'
import New from '@/components/New'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    NavHeader,
    ThingItem,
    New
  },
  mounted () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      axios.get('/users/checkLogin').then((response) => {
        let res = response.data
        // console.log(res)
        if (res.status === '0') {
          // console.log(res.result)
        }
      })
    },
    edit () {
      this.$router.push({path: '/edit'})
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.list{
  margin-top: 10px;
}
.edit{
  position: fixed;
  right: 5%;
  bottom: 8%;
  z-index: 20;
}
</style>
