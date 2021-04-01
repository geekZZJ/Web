<!--
 * @Author: zzj
 * @Date: 2021-03-31 21:58:12
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-31 22:23:44
 * @Description: 
-->
<template>
  <div class="header" :style="{'background-color':bkColor,'z-index':zIndex}">
    <div class="header-left" @click="goback">
      <slot name="h-left">
        <svg-icon icon="arrow-left"></svg-icon>
        <span class="left-text" v-if="backText">{{backText}}</span>
      </slot>
    </div>
    <div class="header-content">
      <slot name="h-center">
        <span>{{title}}</span>
      </slot>
    </div>
    <div class="header-right">
      <slot name="h-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-header",
  components: {},
  props: {
    title: {
      type: String,
      default: "",
    },
    backText: {
      type: String,
      default: "返回",
    },
    back: {
      type: Function,
    },
    bkColor: {
      type: String,
    },
    hasBack: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 0,
    },
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
  methods: {
    goback() {
      if (this.back) {
        this.back();
        return;
      }
      this.$router.go(-1);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>