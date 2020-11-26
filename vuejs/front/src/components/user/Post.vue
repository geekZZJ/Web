<!--
 * @Author: zzj
 * @Date: 2020-11-25 22:17:13
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-26 14:05:10
 * @Description: 
-->
<template>
  <div
    class="fly-panel fly-panel-user"
    pad20
  >
    <div class="layui-tab layui-tab-brief">
      <ul class="layui-tab-title">
        <li>
          <router-link :to="{name: 'MyPost'}">我的发帖</router-link>
        </li>
        <li>
          <router-link :to="{name: 'MyCollection'}">我收藏的帖</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-post",
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