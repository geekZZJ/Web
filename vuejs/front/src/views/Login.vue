<!--
 * @Author: zzj
 * @Date: 2020-10-18 19:42:56
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-07 16:56:42
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
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{name:'Reg'}">注册</router-link>
          </li>
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
                  <label class="layui-form-label">用户名</label>
                  <ValidationProvider
                    rules="required|email"
                    name="email"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="username"
                        v-model="username"
                        placeholder="请输入用户名"
                        autocomplete="off"
                        class="layui-input"
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
                        name="password"
                        v-model="password"
                        placeholder="请输入密码"
                        autocomplete="off"
                        class="layui-input"
                      >
                    </div>
                    <div class="layui-form-mid">
                      <span style="color:#c00">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="layui-form-item">
                  <label class="layui-form-label">验证码</label>
                  <ValidationProvider
                    rules="required|length:4"
                    name="vercode"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="vercode"
                        v-model="vercode"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
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
                  <button class="layui-btn">立即登录</button>
                  <span style="padding-left:20px;">
                    <router-link :to="{name:'Forget'}">忘记密码？</router-link>
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
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
  name: "login",
  components: {
    ValidationProvider,
  },
  data() {
    return {
      username: "",
      password: "",
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
.svg {
  position: relative;
  cursor: pointer;
}
</style>