<!--
 * @Author: zzj
 * @Date: 2020-12-03 16:55:40
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-08 17:34:46
 * @Description: 
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
// https://juejin.cn/post/6844903490653782029 v-model指令在组件中怎么玩
import { findComponentsDownward } from "@/utils/assist";
import Emitter from "@/mixins/emitter";
export default {
  name: "iCheckboxGroup",
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentValue: this.value,
      childrens: [],
    };
  },
  computed: {},
  watch: {
    value() {
      this.updateModel(true);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.updateModel(true);
  },
  methods: {
    updateModel(update) {
      this.childrens = findComponentsDownward(this, "iCheckbox");
      if (this.childrens) {
        const { value } = this;
        this.childrens.forEach((child) => {
          child.model = value;
          if (update) {
            child.currentValue = value.indexOf(child.label) >= 0;
            child.group = true;
          }
        });
      }
    },
    change(data) {
      this.currentValue = data;
      this.$emit("input", data);
      this.$emit("on-change", data);
      this.dispatch("iFormItem", "on-form-change", data);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>