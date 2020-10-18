<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-10-18 15:53:50
 * @Description: 
-->
<template>
  <div class="layui-container layui-form-pane">
    <form
      class="layui-form"
      action=""
    >
      <div class="layui-form-item">
        <label class="layui-form-label">用户名</label>
        <div class="layui-input-block">
          <input
            type="text"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入标题"
            autocomplete="off"
            class="layui-input"
          >
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码</label>
        <div class="layui-input-block">
          <input
            type="password"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入标题"
            autocomplete="off"
            class="layui-input"
          >
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-inline">
          <input
            type="text"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入标题"
            autocomplete="off"
            class="layui-input"
          >
        </div>
        <div
          class="layui-form-mid svg"
          v-html="svg"
          @click="getCaptcha"
        ></div>
      </div>
      <button
        type="button"
        class="layui-btn"
      >点击登录</button>
      <a
        href="http://www.layui.com"
        class="layui-btn layui-btn-primary"
      >忘记密码</a>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      svg: "",
    };
  },
  mounted() {
    this.getCaptcha();
  },
  methods: {
    getCaptcha() {
      axios.get("http://localhost:3000/getCaptcha").then((res) => {
        if (res.status === 200) {
          const obj = res.data;
          if (obj.code === 200) {
            this.svg = obj.data;
          }
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  width: 190px;
}
.svg {
  position: relative;
  top: -15px;
  cursor: pointer;
}
</style>
