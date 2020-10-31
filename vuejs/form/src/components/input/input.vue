<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 11:13:52
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 12:08:10
 * @Description: 
-->
<template>
  <input
    type="text"
    :value="currentValue"
    @input="handleInput"
    @blur="handleBlur"
  />
</template>

<script>
import Emitter from "@/mixins/emitter";
export default {
  name: "iInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  computed: {},
  watch: {
    value(val) {
      this.currentValue = val;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    handleInput(event) {
      const value = event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("iFormItem", "on-form-change", value);
    },
    handleBlur() {
      this.dispatch("iFormItem", "on-form-blur", this.currentValue);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>