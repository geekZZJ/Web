<!--
 * @Author: zzj
 * @Date: 2020-12-20 16:57:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-20 17:52:58
 * @Description: 
-->
<template>
  <div class="layui-container flex">
    <div class="layui-row font pb3">确定更新账号为：{{username}}吗？</div>
    <div class="layui-row">
      <button
        type="button"
        class="layui-btn"
        :class="{'layui-btn-disabled':isSend}"
        @click="submit"
      >确定更新</button>
      <router-link class="layui-btn layui-btn-primary" to="/">返回首页</router-link>
    </div>
  </div>
</template>

<script>
let obj = {};
import { updateUsername } from "@/api/user";
export default {
  name: "confirm",
  data() {
    return {
      username: "",
      isSend: false,
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let queryStr = window.location.href.replace(/.*\?/, "");
    obj = Object.fromEntries(queryStr.split("&").map((v) => v.split("=")));
    this.username = decodeURIComponent(obj.username);
  },
  methods: {
    async submit() {
      obj.username = this.username;
      const result = await updateUsername(obj);
      if (result.code === 200) {
        this.isSend = true;
        this.$alert(result.msg);
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 260px;
  .font {
    font-size: 16px;
    color: #333;
  }
  .pb3 {
    padding-bottom: 30px;
  }
}
</style>