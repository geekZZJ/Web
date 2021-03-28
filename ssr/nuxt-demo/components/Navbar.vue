<!--
 * @Author: zzj
 * @Date: 2021-03-27 22:00:18
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 22:04:35
 * @Description: 
-->
<template>
  <div>
    <nuxt-link to="/create">create link</nuxt-link>
    <nuxt-link to="/about">about link</nuxt-link>
    <nuxt-link to="/">home link</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "navbar",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>