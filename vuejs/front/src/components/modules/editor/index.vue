<!--
 * @Author: zzj
 * @Date: 2020-12-27 14:53:56
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-27 15:18:48
 * @Description: 
-->
<template>
  <div class="edit-wrap">
    <div class="layui-form-item layui-form-text">
      <div class="layui-input-block">
        <div class="layui-unselect fly-edit">
          <!-- 表情 -->
          <span>
            <i class="iconfont icon-yxj-expression"></i>
          </span>
          <span>
            <i class="iconfont icon-tupian"></i>
          </span>
          <span>
            <i class="iconfont icon-lianjie"></i>
          </span>
          <span class="quote">"</span>
          <span>
            <i class="iconfont icon-emwdaima"></i>
          </span>
          <span>hr</span>
          <span>
            <i class="iconfont icon-yulan1"></i>
          </span>
        </div>
        <textarea class="layui-textarea fly-editor"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Editor",
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
.fly-editor {
  height: 260px;
}
.quote {
  font-size: 22px;
  vertical-align: middle;
  position: relative;
  top: 4px;
}
</style>