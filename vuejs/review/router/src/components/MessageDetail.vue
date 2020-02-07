<template>
  <div>
    <p>ID: {{$route.params.id}}</p>
    <ul>
      <li>id: {{messageDetail.id}}</li>
      <li>title: {{messageDetail.title}}</li>
      <li>content: {{messageDetail.content}}</li>
    </ul>
  </div>
</template>

<script>
let allMessages = [
  {
    id: 1,
    title: 'message01',
    content: 'message01 content...'
  },
  {
    id: 3,
    title: 'message03',
    content: 'message03 content...'
  },
  {
    id: 5,
    title: 'message05',
    content: 'message05 content...'
  }
]
export default {
  name: 'MessageDetail',
  data () {
    return {
      messageDetail: {}
    }
  },
  mounted () {
    let id = this.$route.params.id * 1
    this.messageDetail = allMessages.find(detail => {
      if (detail.id === id) {
        return detail
      }
    })
  },

  watch: {
    $route: function (val) {
      let id = val.params.id * 1
      this.messageDetail = allMessages.find(detail => {
        if (detail.id === id) {
          return detail
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
