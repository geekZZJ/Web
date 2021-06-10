<!--
 * @Author: zzj
 * @Date: 2021-06-08 22:10:05
 * @LastEditors: zzj
 * @LastEditTime: 2021-06-10 11:05:05
 * @Description: 
-->
<template>
  <div>
    <img :src="imgUrl" :style="{width:size+'rpx',height:size+'rpx'}" alt />
  </div>
</template>

<script>
import { encode } from "js-base64";
// 1、读取svg图片
// 2、修改fill属性
// 3、base64
// 4、imgUrl = base64
export default {
  name: "icon",
  props: {
    size: {
      type: [Number, String],
      default: 36,
    },
    src: [String],
    color: [String],
  },
  data() {
    return {
      // base64
      imgUrl: "",
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    if (this.color) {
      wx.getFileSystemManager().readFile({
        filePath: this.src,
        encoding: "binary",
        success: (res) => {
          const reg = /fill="#[a-zA-Z0-9]{0,6}"/g;
          let str = "";
          if (reg.test(res.data)) {
            str = res.data.replace(reg, 'fill="' + this.color + '"');
          } else {
            str = res.data.replace(
              /<path\s/g,
              '<path fill="' + this.color + '" '
            );
          }
          console.log("str", str);
          const base64 = encode(str);
          this.imgUrl = "data:image/svg+xml;base64," + base64;
        },
      });
    }
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>