<!--
 * @Author: zzj
 * @Date: 2020-12-27 16:14:56
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-08 15:20:11
 * @Description: 
-->
<template>
  <transition name="fade">
    <div class="layui-layer-tips layui-edit-face edit-content" v-show="isShow">
      <div class="layui-layer-content">
        <ul class="layui-clear">
          <li
            v-for="(value, key) in lists"
            :key="key"
            @click="handleFaceClick(key)"
          >
            <img :src="value" />
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import faces from "@/assets/js/face";
export default {
  name: "Face",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      lists: faces,
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  methods: {
    handleFaceClick(key) {
      this.$emit("addEvent", key);
      this.$emit("closeEvent");
    },
  },
};
</script>
<style lang='scss' scoped>
</style>