<!--
 * @Author: zzj
 * @Date: 2020-10-18 19:43:06
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-07 17:58:06
 * @Description: 
-->
<template>
  <div class="layui-container fly-marginTop">
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
            <router-link :to="{name:'Login'}">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0;"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label class="layui-form-label">邮箱</label>
                  <ValidationProvider
                    rules="required|email"
                    name="email"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="email"
                        v-model="email"
                        autocomplete="off"
                        class="layui-input"
                        placeholder="请输入邮箱地址"
                      >
                    </div>
                    <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                    <div class="layui-form-mid">
                      <span style="color:#c00">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">昵称</label>
                  <ValidationProvider
                    rules="required"
                    name="username"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="username"
                        autocomplete="off"
                        class="layui-input"
                        v-model="username"
                        placeholder="请输入用户名"
                      >
                    </div>
                    <div class="layui-form-mid">
                      <span style="color:#c00">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">密码</label>
                  <ValidationProvider
                    rules="required|min:6"
                    name="password"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="pass"
                        autocomplete="off"
                        class="layui-input"
                        v-model="password"
                        placeholder="请输入密码"
                      >
                    </div>
                    <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                    <div class="layui-form-mid">
                      <span style="color:#c00">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">确认密码</label>
                  <ValidationProvider
                    rules="required"
                    name="password"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="password"
                        name="repass"
                        autocomplete="off"
                        class="layui-input"
                        v-model="repass"
                        placeholder="请确认密码"
                      >
                    </div>
                    <div class="layui-form-mid">
                      <span style="color:#c00">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">人类验证</label>
                  <ValidationProvider
                    rules="required|length:4"
                    name="vercode"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="vercode"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                        v-model="vercode"
                      >
                    </div>
                    <div>
                      <span
                        v-html="svg"
                        @click="_getCode"
                        class="svg"
                      ></span>
                    </div>
                    <div class="layui-form-mid">
                      <span style="color:#c00">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn">立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a
                    href=""
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href=""
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from "vee-validate";
import { getCode } from "@/api/login";
export default {
  name: "reg",
  components: { ValidationProvider },
  data() {
    return {
      email: "",
      username: "",
      password: "",
      repass: "",
      vercode: "",
      svg: "",
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this._getCode();
  },
  methods: {
    async _getCode() {
      const result = await getCode();
      console.log("result", result);
      if (result.code === 200) {
        this.svg = result.data;
      }
    },
  },
};
</script>
<style lang='scss' scoped>
</style>