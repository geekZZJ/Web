<!--
 * @Author: zzj
 * @Date: 2020-11-26 11:19:39
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-26 11:20:29
 * @Description: 
-->
<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <div class="avatar-add">
        <p>建议尺寸168*168，支持jpg、png、gif，最大不能超过50KB</p>
        <label
          for="pic"
          class="layui-btn upload-img"
        >
          <i class="layui-icon">&#xe67c;</i>上传头像
        </label>
        <input
          id="pic"
          type="file"
          name="file"
          accept="image/png, image/gif, image/jpg"
          @change="upload"
        />
        <img :src="pic" />
        <span class="loading"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "picupload",
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
#pic {
  display: none;
}
</style>
