<!--
 * @Author: zzj
 * @Date: 2020-11-17 11:01:30
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-22 14:14:20
 * @Description: 
-->
<template>
  <div class="fly-panel">
    <h3 class="fly-panel-title">温馨通道</h3>
    <div class="fly-panel-main layui-row">
      <ul class="layui-clear quick">
        <li
          class="layui-col-xs6"
          v-for="(item,index) in lists"
          :key="index"
        >
          <a
            :href="item.link"
            target="_blank"
          >{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getTips } from "@/api/content";
export default {
  name: "tips",
  data() {
    return {
      lists: [],
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this._getTips();
  },
  methods: {
    async _getTips() {
      const result = await getTips();
      if (result.code === 200) {
        this.lists = result.data;
      } else {
        this.$alert("服务器错误");
      }
    },
  },
};
</script>
<style lang='scss' scoped>
$border-color: #f2f2f2;
.fly-panel-main {
  padding: 15px;
  .quick {
    border: 1px solid $border-color;
    border-bottom: none;
    border-right: none;
    .layui-col-xs6 {
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
      border: 1px solid $border-color;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      border-top: none;
      border-left: none;
    }
  }
}
</style>