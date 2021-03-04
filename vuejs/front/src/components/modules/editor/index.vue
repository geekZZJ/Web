<!--
 * @Author: zzj
 * @Date: 2020-12-27 14:53:56
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-04 17:11:47
 * @Description: 
-->
<template>
  <div class="edit-wrap">
    <div class="layui-form-item layui-form-text">
      <div class="layui-input-block">
        <div class="layui-unselect fly-edit" ref="icons">
          <!-- 表情 -->
          <span @click="showFace" ref="face">
            <i class="iconfont icon-yxj-expression"></i>
          </span>
          <span @click="showImg" ref="img">
            <i class="iconfont icon-tupian"></i>
          </span>
          <span @click="showLink" ref="link">
            <i class="iconfont icon-lianjie"></i>
          </span>
          <span class="quote">"</span>
          <span>
            <i class="iconfont icon-emwdaima"></i>
          </span>
          <span>hr</span>
          <span @click="showPreview" ref="preview">
            <i class="iconfont icon-yulan1"></i>
          </span>
        </div>
        <textarea
          class="layui-textarea fly-editor"
          @focus="focusEvent"
          @blur="blurEvent"
          id="edit"
          v-model="content"
        ></textarea>
      </div>
    </div>
    <div ref="modal">
      <Face
        :isShow="faceStatus"
        :ctrl="this.$refs.face"
        @closeEvent="()=>{this.faceStatus=false}"
        @addEvent="addFace"
      ></Face>
      <ImgUpload
        :isShow="imgStatus"
        :ctrl="this.$refs.img"
        @closeEvent="()=>{this.imgStatus=false}"
        @addEvent="addPic"
      ></ImgUpload>
      <LinkAdd
        :isShow="linkStatus"
        :ctrl="this.$refs.link"
        @closeEvent="()=>{this.linkStatus=false}"
        @addEvent="addLink"
      ></LinkAdd>
      <Preview
        :isShow="previewStatus"
        :ctrl="this.$refs.preview"
        :content="content"
        @closeEvent="()=>{this.previewStatus=false}"
      ></Preview>
    </div>
  </div>
</template>

<script>
import Face from "./face";
import ImgUpload from "./imgUpload";
import LinkAdd from "./linkAdd";
import Preview from "./preview";
export default {
  name: "Editor",
  components: {
    Face,
    ImgUpload,
    LinkAdd,
    Preview,
  },
  data() {
    return {
      faceStatus: false,
      imgStatus: false,
      linkStatus: false,
      previewStatus: false,
      content: "",
      pos: "",
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$nextTick(() => {
      document
        .querySelector("body")
        .addEventListener("click", this.handleBodyClick);
    });
  },
  beforeDestroy() {
    document
      .querySelector("body")
      .removeEventListener("click", this.handleBodyClick);
  },
  methods: {
    focusEvent() {
      this.getPos();
    },
    blurEvent() {
      this.getPos();
    },
    getPos() {
      let cursorPos = 0;
      let elem = document.getElementById("edit");
      if (document.selection) {
        let selectRange = document.selection.createRange();
        selectRange.moveStart("character", -elem.value.length);
        cursorPos = selectRange.text.length;
      } else if (elem.selectionStart || elem.selectionStart === "0") {
        cursorPos = elem.selectionStart;
      }
      this.pos = cursorPos;
    },
    handleBodyClick(e) {
      e.stopPropagation();
      if (
        !(
          this.$refs.icons.contains(e.target) ||
          this.$refs.modal.contains(e.target)
        )
      ) {
        this.linkStatus = false;
        this.faceStatus = false;
        this.imgStatus = false;
      }
    },
    showFace() {
      this.faceStatus = !this.faceStatus;
    },
    showImg() {
      this.imgStatus = !this.imgStatus;
    },
    showLink() {
      this.linkStatus = !this.linkStatus;
    },
    showPreview() {
      this.previewStatus = !this.previewStatus;
    },
    insert(val) {
      if (typeof this.content === "undefined") {
        return;
      }
      let tmp = this.content.split("");
      tmp.splice(this.pos, 0, val);
      this.content = tmp.join("");
    },
    addFace(item) {
      const insertContent = `face${item}`;
      this.insert(insertContent);
      this.pos += insertContent.length;
    },
    addPic(item) {
      const insertContent = `img[${item}]`;
      this.insert(insertContent);
      this.pos += insertContent.length;
    },
    addLink(item) {
      const insertContent = `a(${item})[${item}]`;
      this.insert(insertContent);
      this.pos += insertContent.length;
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
.edit-content {
  position: absolute;
  top: 45px;
  left: 0;
}
</style>