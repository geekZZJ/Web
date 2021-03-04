<!--
 * @Author: zzj
 * @Date: 2021-03-04 16:24:56
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-04 17:11:12
 * @Description: 
-->
<template>
  <transition name="fade">
    <div
      id="preview"
      class="layui-layer-page layui-layer-prompt edit-content"
      v-show="isShow"
    >
      <div class="layui-layer-title">预览</div>
      <div class="layui-layer-content">
        <div class="detail-body" v-html="replaceContent"></div>
      </div>
      <span class="layui-layer-setwin" @click="cancel()">
        <a class="layui-layer-ico layui-layer-close layui-layer-close1"></a>
      </span>
    </div>
  </transition>
</template>

<script>
import { escapeHtml } from "@/utils/escapeHtml";
export default {
  name: "Preview",
  components: {},
  props: ["isShow", "content"],
  data() {
    return {};
  },
  computed: {
    replaceContent() {
      if (typeof this.content === "undefined" || this.content.trim() === "") {
        return;
      }
      return escapeHtml(this.content);
    },
  },
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    cancel() {
      this.$emit("closeEvent");
    },
  },
};
</script>
<style lang='scss' scoped>
#preview {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 10000;
  overflow-y: auto;
}
.detail-body {
  max-width: 1000px;
  margin: 0 auto;
}

pre {
  position: relative;
  margin: 10px 0;
  padding: 15px;
  line-height: 20px;
  background: #f2f2f2;
  color: #333;
  font-family: "Courier New", Courier, monospace, serif;
  font-size: 12px;
  border: none;
  border-left: 5px solid #ddd;
}
</style>