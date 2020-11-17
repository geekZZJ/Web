<!--
 * @Author: zzj
 * @Date: 2020-11-17 14:02:44
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-17 14:18:34
 * @Description: 
-->
<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <top></top>
        <list></list>
      </div>
      <div class="layui-col-md4">
        <tips></tips>
        <sign></sign>
        <hot-list></hot-list>
        <ads></ads>
        <links></links>
      </div>
    </div>
  </div>
</template>

<script>
import Tips from "@/components/sidebar/Tips.vue";
import Sign from "@/components/sidebar/Sign.vue";
import HotList from "@/components/sidebar/HotList.vue";
import Ads from "@/components/sidebar/Ads.vue";
import Links from "@/components/sidebar/Links.vue";
import List from "@/components/contents/List.vue";
import Top from "@/components/contents/Top.vue";

export default {
  name: "index",
  components: {
    Tips,
    Sign,
    HotList,
    Ads,
    Links,
    List,
    Top,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>