<!--
 * @Author: zzj
 * @Date: 2021-06-07 22:29:25
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-08 10:01:33
 * @Description: 
-->
<template>
  <div class="test">hello mpvue</div>
</template>

<script>
export default {
  name: "",
  components: {},
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
$color: red;
.test {
  color: $color;
}
</style>