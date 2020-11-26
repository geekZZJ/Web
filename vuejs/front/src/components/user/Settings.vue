<!--
 * @Author: zzj
 * @Date: 2020-11-25 22:16:01
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-26 11:35:51
 * @Description: 
-->
<template>
  <div
    class="fly-panel fly-panel-user"
    pad20
  >
    <div
      class="layui-tab layui-tab-brief"
      lay-filter="user"
    >
      <ul class="layui-tab-title">
        <li>
          <router-link :to="{name: 'Info'}">我的资料</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Pic'}">头像</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Passwd'}">密码</router-link>
        </li>
        <li>
          <router-link :to="{name: 'Accounts'}">帐号绑定</router-link>
        </li>
      </ul>
      <div
        class="layui-tab-content"
        style="padding: 20px 0;"
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "settings",
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