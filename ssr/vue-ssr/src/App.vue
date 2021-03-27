<!--
 * @Author: zzj
 * @Date: 2021-03-21 14:51:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-27 15:19:24
 * @Description: 
-->
<template>
  <div id="app">
    123!!!
    <Hello></Hello>
  </div>
</template>

<script>
import Hello from "./components/Hello.vue";
export default {
  name: "App",
  components: {
    Hello,
  },
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