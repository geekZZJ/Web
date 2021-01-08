<!--
 * @Author: zzj
 * @Date: 2021-01-08 09:43:30
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-08 16:19:14
 * @Description: 
-->
<template>
  <transition name="fade">
    <div
      class="layui-layer layui-layer-page layui-layer-border edit-content"
      v-show="isShow"
    >
      <div class="layui-layer-title">插入图片</div>
      <div class="layui-layer-content">
        <ul class="layui-form layui-form-pane">
          <li class="layui-form-item">
            <label class="layui-form-label">URL</label>
            <div class="layui-input-inline">
              <input
                type="text"
                placeholder="粘贴图片地址或者点击上传"
                v-model="pic"
                class="layui-input"
              />
            </div>
            <button type="button" class="layui-btn layui-btn-primary">
              <label for="uploadImg">
                <i class="layui-icon layui-icon-upload"></i>上传图片
              </label>
            </button>
            <input
              type="file"
              id="uploadImg"
              class="layui-upload-file"
              @change="upload"
            />
          </li>
          <li class="layui-form-item">
            <button type="button" class="layui-btn" @click="submit">确认</button>
          </li>
        </ul>
      </div>
      <span class="layui-layer-setwin" @click.stop="close">
        <a
          href="javascript:void(0)"
          class="layui-layer-ico layui-layer-close layui-layer-close1"
        ></a>
      </span>
    </div>
  </transition>
</template>

<script>
import config from "@/config";
import { uploadImg } from "@/api/content";
export default {
  name: "ImgUpload",
  props: ["isShow"],
  data() {
    return {
      pic: "",
      formData: null,
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  methods: {
    close() {
      this.$emit("closeEvent");
      this.pic = "";
      this.formData = null;
    },
    async upload(e) {
      const file = e.target.files;
      let formData = new FormData();
      if (file.length > 0) {
        formData.append("file", file[0]);
        this.formData = formData;
      }
      // 上传图片
      const result = await uploadImg(this.formData);
      if (result.code === 200) {
        const baseUrl =
          process.env.NODE_ENV === "production"
            ? config.baseUrl.pro
            : config.baseUrl.dev;
        this.pic = baseUrl + result.data;
      }
      document.getElementById("uploadImg").value = "";
    },
    submit() {
      this.$emit("addEvent", this.pic);
      setTimeout(() => {
        this.pic = "";
        this.formData = null;
        this.$emit("closeEvent");
      }, 0);
    },
  },
};
</script>
<style lang='scss' scoped>
.layui-form-item {
  text-align: center;
}
.layui-form-pane {
  margin: 20px;
}
</style>