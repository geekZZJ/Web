<!--
 * @Author: zzj
 * @Date: 2020-12-17 15:28:54
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-17 15:39:54
 * @Description: 
-->
<template>
  <div class="layui-container flex">
    <img src="../assets/img/icon-404.png" alt />
    <p>找不到页面了</p>
    <router-link class="layui-btn" to="/">回到首页</router-link>
  </div>
</template>

<script>
export default {
  name: "notFound",
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
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  p {
    padding: 10px 0 15px 0;
    color: #ddd;
  }
}
</style>