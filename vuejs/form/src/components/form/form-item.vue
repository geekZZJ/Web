<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 11:06:26
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 11:35:59
 * @Description: 
-->
<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Emitter from "@/mixins/emitter";
export default {
  name: "iFormItem",
  mixins: [Emitter],
  components: {},
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
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
  mounted() {
    // 如果没有传入 prop，则无需校验，也就无需缓存
    if (this.prop) {
      this.dispatch("iForm", "on-form-item-add", this);
    }
  },
  methods: {},
  // 组件销毁前，将实例从 Form 的缓存中移除
  beforeDestroy() {
    this.dispatch("iForm", "on-form-item-remove", this);
  },
};
</script>
<style lang='scss' scoped>
</style>