<!--
 * @Author: 张中俊
 * @Date: 2020-10-17 11:13:52
 * @LastEditors: 张中俊
 * @LastEditTime: 2020-10-17 11:48:04
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