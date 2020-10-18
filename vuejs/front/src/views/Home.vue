<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 20:17:44
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-18 11:16:25
 * @Description: 
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
