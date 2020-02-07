<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    // 模拟ajax请求从后台获取数据
    setTimeout(() => {
      let messages = [
        {
          id: 1,
          title: 'message01'
        },
        {
          id: 3,
          title: 'message03'
        },
        {
          id: 5,
          title: 'message05'
        }
      ]
      this.messages = messages
    }, 1000)
  }
}
</script>

<style scoped>

</style>
