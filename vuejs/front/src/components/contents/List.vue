<!--
 * @Author: zzj
 * @Date: 2020-11-17 11:31:31
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-20 22:56:22
 * @Description: 
-->
<template>
  <div
    class="fly-panel"
    style="margin-bottom: 0;"
  >
    <div class="fly-panel-title fly-filter">
      <a
        href=""
        :class="{'layui-this':status===''&&tag===''}"
        @click.prevent="search()"
      >综合</a>
      <span class="fly-mid"></span>
      <a
        href=""
        :class="{'layui-this':status==='0'}"
        @click.prevent="search(0)"
      >未结</a>
      <span class="fly-mid"></span>
      <a
        href=""
        :class="{'layui-this':status==='1'}"
        @click.prevent="search(1)"
      >已结</a>
      <span class="fly-mid"></span>
      <a
        href=""
        :class="{'layui-this':status===''&&tag==='精华'}"
        @click.prevent="search(2)"
      >精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a
          href=""
          :class="{'layui-this':sort==='created'}"
          @click.prevent="search(3)"
        >按最新</a>
        <span class="fly-mid"></span>
        <a
          href=""
          :class="{'layui-this':sort==='answer'}"
          @click.prevent="search(4)"
        >按热议</a>
      </span>
    </div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
export default {
  name: "list",
  components: { ListItem },
  data() {
    return {
      status: "",
      tag: "",
      sort: "created",
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    search(val) {
      switch (val) {
        case 0:
          this.status = "0";
          this.tag = "";
          break;
        case 1:
          this.status = "1";
          this.tag = "";
          break;
        case 2:
          this.status = "";
          this.tag = "精华";
          break;
        case 3:
          this.sort = "created";
          break;
        case 4:
          this.sort = "answer";
          break;
        default:
          this.status = "";
          this.tag = "";
          break;
      }
    },
  },
};
</script>
<style lang='scss' scoped>
</style>