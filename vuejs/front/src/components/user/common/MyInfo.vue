<!--
 * @Author: zzj
 * @Date: 2020-11-26 11:17:55
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-21 21:43:52
 * @Description: 
-->
<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <validation-observer ref="observer" v-slot="{validate}">
      <div class="layui-form-item">
        <validation-provider
          name="email"
          rules="required|email"
          v-slot="{errors}"
        >
          <label class="layui-form-label">邮箱</label>
          <div class="layui-input-inline">
            <input
              type="text"
              name="email"
              class="layui-input"
              v-model="username"
            />
          </div>
          <!-- <div class="layui-form-mid layui-word-aux">
            如果您在邮箱已激活的情况下，变更了邮箱，需
            <a
              href="activate.html"
              style="font-size: 12px; color: #4f99cf;"
            >重新验证邮箱</a>。
          </div>-->
          <div class="layui-form-mid">
            <span style="color: #c00;">{{errors[0]}}</span>
          </div>
        </validation-provider>
      </div>
      <div class="layui-form-item">
        <validation-provider name="name" rules="required" v-slot="{errors}">
          <label class="layui-form-label">昵称</label>
          <div class="layui-input-inline">
            <input type="text" name="name" class="layui-input" v-model="name" />
          </div>
          <div class="layui-form-mid">
            <span style="color: #c00;">{{errors[0]}}</span>
          </div>
        </validation-provider>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">城市</label>
        <div class="layui-input-inline">
          <input type="text" v-model="location" class="layui-input" />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">性别</label>
        <div class="layui-input-inline gray mt1 ml1">
          <label for="gender1" class="mr1">
            <input
              id="gender1"
              type="radio"
              name="sex"
              v-model="gender"
              value="0"
              title="男"
            />
            <i
              class="layui-icon layui-icon-circle"
              :class="{'layui-icon-radio': gender ==='0'}"
            ></i>
            男
          </label>
          <label for="gender2">
            <input
              id="gender2"
              type="radio"
              name="sex"
              v-model="gender"
              value="1"
              title="女"
            />
            <i
              class="layui-icon layui-icon-circle"
              :class="{'layui-icon-radio': gender ==='1'}"
            ></i>
            女
          </label>
        </div>
      </div>
      <div class="layui-form-item layui-form-text">
        <label class="layui-form-label">签名</label>
        <div class="layui-input-block">
          <textarea
            placeholder="随便写些什么刷下存在感"
            v-model="regmark"
            class="layui-textarea"
            style="height: 80px;"
          ></textarea>
        </div>
      </div>
      <div class="layui-form-item">
        <button class="layui-btn" @click="validate().then(submit)">确认修改</button>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { updateUserInfo } from "@/api/user";
export default {
  name: "myinfo",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      gender: "",
      username: "",
      name: "",
      location: "",
      regmark: "",
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let {
      username,
      name,
      gender,
      location,
      regmark,
    } = this.$store.state.userInfo;
    this.username = username || "";
    this.name = name || "";
    this.gender = gender || "";
    this.location = location || "";
    this.regmark = regmark || "";
  },
  methods: {
    async submit(validation) {
      if (!validation) {
        return;
      }
      const { username, name, gender, location, regmark } = this;
      const userInfo = { username, name, gender, location, regmark };
      const result = await updateUserInfo(userInfo);
      if (result.code === 200) {
        this.$store.commit("setUserInfo", {
          ...this.$store.state.userInfo,
          ...{ username, name, gender, location, regmark },
        });
        this.$alert("更新成功");
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.layui-icon-radio {
  color: #5fb878;
}
</style>