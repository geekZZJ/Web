<!--
 * @Author: zzj
 * @Date: 2021-03-27 17:20:42
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 17:23:27
 * @Description: 
-->
<template>
  <div>
    <nuxt-link to="/create">create link</nuxt-link>
    <nuxt-link to="/list">list link</nuxt-link>
    <nuxt-link to="/about">about link</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped></style>
