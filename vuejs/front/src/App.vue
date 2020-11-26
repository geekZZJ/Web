<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-26 14:22:27
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
.pd20 {
  padding: 20px;
}

.mt20 {
  margin-top: -20px;
}

.pl0 {
  padding-left: 0;
}
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}
</style>
