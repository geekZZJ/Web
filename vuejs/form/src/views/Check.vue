<!--
 * @Author: zzj
 * @Date: 2020-10-15 20:07:14
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-03 17:20:41
 * @Description: 
-->
<template>
  <div>
    <iCheckbox></iCheckbox>
  </div>
</template>

<script>
import iCheckbox from "@/components/checkbox/checkbox.vue";
export default {
  name: "Check",
  components: { iCheckbox },
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