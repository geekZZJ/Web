<!--
 * @Author: zzj
 * @Date: 2020-11-17 14:15:39
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-21 18:25:28
 * @Description: 
-->
<template>
  <div
    class="fly-panel"
    v-show="lists.length>0"
  >
    <div class="fly-panel-title fly-filter">
      <a>置顶</a>
      <a
        href="#signin"
        class="layui-hide-sm layui-show-xs-block fly-right"
        id="LAY_goSignin"
        style="color: #FF5722;"
      >去签到</a>
    </div>
    <list-item
      :lists="lists"
      :isShow="false"
    ></list-item>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "top",
  components: { ListItem },
  data() {
    return {
      lists: [],
      page: 0,
      limit: 20,
    };
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