<!--
 * @Author: zzj
 * @Date: 2020-11-17 14:15:39
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-22 12:44:48
 * @Description: 
-->
<template>
  <div
    class="fly-panel"
    v-show="lists.length>0"
  >
    <div class="fly-panel-title fly-filter">
      <a>置顶</a>
      <a
        href="#signin"
        class="layui-hide-sm layui-show-xs-block fly-right"
        id="LAY_goSignin"
        style="color: #FF5722;"
      >去签到</a>
    </div>
    <list-item
      :lists="lists"
      :isShow="false"
    ></list-item>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
import { getList } from "@/api/content";
export default {
  name: "top",
  components: { ListItem },
  data() {
    return {
      lists: [],
      page: 0,
      limit: 4,
      catalog: "",
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this._getList();
  },
  methods: {
    async _getList() {
      const { catalog, page, limit } = this;
      let options = {
        catalog,
        page,
        limit,
        isTop: 1,
      };
      const result = await getList(options);
      console.log("result", result);
      if (result.code === 200) {
        this.lists = this.lists.concat(result.data);
      } else {
        if (err) {
          this.$alert(err.message);
        }
      }
    },
  },
};
</script>
<style lang='scss' scoped>
</style>