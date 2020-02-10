<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment if async</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      count: 0
    }
  },
  computed: {
    evenOrOdd () {
      return this.count % 2 === 0 ? '偶数' : '奇数'
    }
  },
  methods: {
    increment () {
      let count = this.count
      this.count = count + 1
    },
    decrement () {
      let count = this.count
      this.count = count - 1
    },
    // 如果是奇数才增加
    incrementIfOdd () {
      let count = this.count
      if (count % 2 === 1) {
        this.count = count + 1
      }
    },
    // 过1s才增加
    incrementAsync () {
      let count = this.count
      setTimeout(() => {
        this.count = count + 1
      }, 1000)
    }
  }
}
</script>

<style>

</style>
