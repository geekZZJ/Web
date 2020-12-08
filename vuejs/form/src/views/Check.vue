<!--
 * @Author: zzj
 * @Date: 2020-10-15 20:07:14
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-08 17:27:11
 * @Description: 
-->
<template>
  <div class="check">
    <iCheckboxGroup v-model="fruit">
      <iCheckbox label="香蕉">香蕉</iCheckbox>
      <iCheckbox label="苹果">苹果</iCheckbox>
      <iCheckbox label="西瓜">西瓜</iCheckbox>
    </iCheckboxGroup>
  </div>
</template>

<script>
import iCheckbox from "@/components/checkbox/checkbox.vue";
import iCheckboxGroup from "@/components/checkbox/checkbox-group.vue";
export default {
  name: "Check",
  components: { iCheckbox, iCheckboxGroup },
  data() {
    return {
      fruit: ["苹果"],
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