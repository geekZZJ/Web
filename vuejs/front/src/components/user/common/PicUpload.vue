<!--
 * @Author: zzj
 * @Date: 2020-11-26 11:19:39
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-26 18:05:24
 * @Description: 
-->
<template>
  <div class="layui-form layui-form-pane layui-tab-item layui-show">
    <div class="layui-form-item">
      <div class="avatar-add">
        <p>建议尺寸168*168，支持jpg、png、gif，最大不能超过50KB</p>
        <label for="pic" class="layui-btn upload-img">
          <i class="layui-icon">&#xe67c;</i>上传头像
        </label>
        <input
          id="pic"
          type="file"
          name="file"
          accept="image/png, image/gif, image/jpg"
          @change="upload"
        />
        <img :src="pic" />
        <span class="loading"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { uploadImg } from "@/api/content";
import { updateUserInfo } from "@/api/user";
import config from "@/config";
export default {
  name: "picupload",
  data() {
    return {
      pic:
        this.$store.state.userInfo && this.$store.state.userInfo.pic
          ? this.$store.state.userInfo.pic
          : "/img/bear-200-200.jpg",
      formData: null,
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    async upload(e) {
      let file = e.target.files;
      let formData = new FormData();
      if (file.length > 0) {
        formData.append("file", file[0]);
        this.formData = formData;
      }
      // 上传图片之后
      const result = await uploadImg(this.formData);
      if (result.code === 200) {
        const baseUrl =
          process.env.NODE_ENV === "production"
            ? config.baseUrl.pro
            : config.baseUrl.dev;
        this.pic = baseUrl + result.data;
      }
      // 更新用户基本信息
      const res = await updateUserInfo({ pic: this.pic });
      const user = this.$store.state.userInfo;
      user.pic = this.pic;
      this.$store.commit("setUserInfo", user);
      this.$alert("图片上传成功");
      document.getElementById("pic").value = "";
    },
  },
};
</script>
<style lang='scss' scoped>
#pic {
  display: none;
}
</style>
