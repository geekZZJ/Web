<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-08 10:04:07
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
@import "assets/css/layui-layer/layer.css";

.gray {
  color: #999;
}

@for $i from 0 to 5 {
  .pd#{$i} {
    padding: $i * 10 + px !important;
  }
  .pt#{$i} {
    padding-top: $i * 10 + px !important;
  }
  .pl#{$i} {
    padding-left: $i * 10 + px !important;
  }
  .pr#{$i} {
    padding-right: $i * 10 + px !important;
  }
  .mr#{$i} {
    margin-right: $i * 10 + px !important;
  }
  .mt#{$i} {
    margin-top: $i * 10 + px !important;
  }
  .ml#{$i} {
    margin-left: $i * 10 + px !important;
  }
}

.mt20 {
  margin-top: -20px;
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

.orange {
  color: #ff5722;
}

.pull-right {
  float: right !important;
}
</style>
