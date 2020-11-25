<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-25 21:50:13
 * @Description: 
-->
<template>
  <div>
    <i-header></i-header>
    <router-view />
    <i-footer></i-footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "app",
  components: {
    "i-header": Header,
    "i-footer": Footer,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
@import "assets/css/global.css";

.gray {
  color: #999;
}
</style>
