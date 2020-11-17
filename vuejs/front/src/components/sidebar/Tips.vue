<!--
 * @Author: zzj
 * @Date: 2020-11-17 11:01:30
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-17 13:52:07
 * @Description: 
-->
<template>
  <div class="fly-panel">
    <h3 class="fly-panel-title">温馨通道</h3>
    <div class="fly-panel-main layui-row">
      <ul class="layui-clear quick">
        <li class="layui-col-xs6">
          <a
            href=""
            target="_blank"
          >layui的GitHub及Gitee(码云)仓库，欢迎Star</a>
        </li>
        <li class="layui-col-xs6">
          <a
            href=""
            target="_blank"
          >layui的GitHub及Gitee(码云)仓库，欢迎Star</a>
        </li>
        <li class="layui-col-xs6">
          <a
            href=""
            target="_blank"
          >layui的GitHub及Gitee(码云)仓库，欢迎Star</a>
        </li>
        <li class="layui-col-xs6">
          <a
            href=""
            target="_blank"
          >layui的GitHub及Gitee(码云)仓库，欢迎Star</a>
        </li>
        <li class="layui-col-xs6">
          <a
            href=""
            target="_blank"
          >layui的GitHub及Gitee(码云)仓库，欢迎Star</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "tips",
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
$border-color: #f2f2f2;
.fly-panel-main {
  padding: 15px;
  .quick {
    border: 1px solid $border-color;
    border-bottom: none;
    border-right: none;
    .layui-col-xs6 {
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      border: 1px solid $border-color;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border-top: none;
      border-left: none;
    }
  }
}
</style>