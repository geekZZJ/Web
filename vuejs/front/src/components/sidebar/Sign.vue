<!--
 * @Author: zzj
 * @Date: 2020-11-17 11:01:42
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-17 13:55:32
 * @Description: 
-->
<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title">
      签到
      <i class="fly-mid"></i>
      <a
        href="javascript:;"
        class="fly-link"
      >说明</a>
      <i class="fly-mid"></i>
      <a
        href="javascript:;"
        class="fly-link"
      >活跃榜<span class="layui-badge-dot"></span></a>
      <span class="fly-signin-days">已连续签到<cite>16</cite>天</span>
    </div>
    <div class="fly-panel-main fly-signin-main">
      <button class="layui-btn layui-btn-danger">今日签到</button>
      <span>可获得<cite>5</cite>飞吻</span>

      <!-- 已签到状态 -->
      <!--
          <button class="layui-btn layui-btn-disabled">今日已签到</button>
          <span>获得了<cite>20</cite>飞吻</span>
          -->
    </div>
  </div>
</template>

<script>
export default {
  name: "sign",
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