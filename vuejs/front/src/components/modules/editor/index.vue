<!--
 * @Author: zzj
 * @Date: 2020-12-27 14:53:56
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-27 16:55:38
 * @Description: 
-->
<template>
  <div class="edit-wrap">
    <div class="layui-form-item layui-form-text">
      <div class="layui-input-block">
        <div class="layui-unselect fly-edit">
          <!-- 表情 -->
          <span @click="showFace" ref="face">
            <i class="iconfont icon-yxj-expression"></i>
          </span>
          <span>
            <i class="iconfont icon-tupian"></i>
          </span>
          <span>
            <i class="iconfont icon-lianjie"></i>
          </span>
          <span class="quote">"</span>
          <span>
            <i class="iconfont icon-emwdaima"></i>
          </span>
          <span>hr</span>
          <span>
            <i class="iconfont icon-yulan1"></i>
          </span>
        </div>
        <textarea class="layui-textarea fly-editor"></textarea>
      </div>
    </div>
    <Face
      :isShow="faceStatus"
      :ctrl="this.$refs.face"
      @closeEvent="()=>{this.faceStatus=false}"
    ></Face>
  </div>
</template>

<script>
import Face from "./face";
export default {
  name: "Editor",
  components: {
    Face,
  },
  data() {
    return {
      faceStatus: false,
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    showFace() {
      this.faceStatus = !this.faceStatus;
    },
  },
};
</script>
<style lang='scss'>
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes bounceOut {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.05);
  }
  100% {
    opacity: 0;
    transform: scale(0.7);
  }
}
.fade-leave-active {
  animation: bounceOut 0.3;
}
.fade-enter-active,
.fade-enter-to {
  animation: bounceIn 0.3;
}
.fly-editor {
  height: 260px;
}
.quote {
  font-size: 22px;
  vertical-align: middle;
  position: relative;
  top: 4px;
}
.edit-wrap {
  position: relative;
}
</style>