<!--
 * @Author: zzj
 * @Date: 2020-10-15 20:07:14
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-05 16:30:18
 * @Description: 
-->
<template>
  <div>
    <iCheckbox v-model="like">吃饭</iCheckbox>
  </div>
</template>

<script>
import iCheckbox from "@/components/checkbox/checkbox.vue";
export default {
  name: "Check",
  components: { iCheckbox },
  data() {
    return {
      like: true,
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