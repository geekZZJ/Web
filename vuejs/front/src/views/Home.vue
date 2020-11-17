<!--
 * @Author: zzj
 * @Date: 2020-11-16 20:40:28
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-17 14:11:04
 * @Description: 
-->
<template>
  <div>
    <panel></panel>
    <router-view></router-view>
  </div>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  name: "home",
  components: {
    Panel,
  },
};
</script>

<style lang="scss" scoped>
</style>