<!--
 * @Author: zzj
 * @Date: 2020-11-17 11:31:31
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-21 19:45:44
 * @Description: 
-->
<template>
  <div
    class="fly-panel"
    style="margin-bottom: 0;"
  >
    <div class="fly-panel-title fly-filter">
      <a
        href=""
        :class="{'layui-this':status===''&&tag===''}"
        @click.prevent="search()"
      >综合</a>
      <span class="fly-mid"></span>
      <a
        href=""
        :class="{'layui-this':status==='0'}"
        @click.prevent="search(0)"
      >未结</a>
      <span class="fly-mid"></span>
      <a
        href=""
        :class="{'layui-this':status==='1'}"
        @click.prevent="search(1)"
      >已结</a>
      <span class="fly-mid"></span>
      <a
        href=""
        :class="{'layui-this':status===''&&tag==='精华'}"
        @click.prevent="search(2)"
      >精华</a>
      <span class="fly-filter-right layui-hide-xs">
        <a
          href=""
          :class="{'layui-this':sort==='created'}"
          @click.prevent="search(3)"
        >按最新</a>
        <span class="fly-mid"></span>
        <a
          href=""
          :class="{'layui-this':sort==='answer'}"
          @click.prevent="search(4)"
        >按热议</a>
      </span>
    </div>
    <list-item
      :lists=lists
      @nextpage="nextPage"
      :isEnd="isEnd"
    ></list-item>
  </div>
</template>

<script>
import { getList } from "@/api/content";
import ListItem from "./ListItem.vue";
export default {
  name: "list",
  components: { ListItem },
  data() {
    return {
      status: "",
      tag: "",
      sort: "created",
      page: 0,
      limit: 20,
      catalog: "",
      lists: [],
      isEnd: false,
      isRepeat: false,
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
      if (this.isRepeat) {
        return;
      }
      if (this.isEnd) {
        return;
      }
      this.isRepeat = true;
      const { catalog, page, limit, sort, tag, status } = this;
      let options = {
        catalog,
        page,
        limit,
        sort,
        tag,
        status,
        isTop: 0,
      };
      const result = await getList(options);
      console.log("result", result);
      if (result.code === 200) {
        // 加入请求锁，防止用户多次点击
        this.isRepeat = false;
        if (result.data.length < this.limit) {
          this.isEnd = true;
        }
        this.lists = this.lists.concat(result.data);
      } else {
        if (err) {
          this.isRepeat = false;
          this.$alert(err.msg);
        }
      }
    },
    search(val) {
      switch (val) {
        case 0:
          this.status = "0";
          this.tag = "";
          break;
        case 1:
          this.status = "1";
          this.tag = "";
          break;
        case 2:
          this.status = "";
          this.tag = "精华";
          break;
        case 3:
          this.sort = "created";
          break;
        case 4:
          this.sort = "answer";
          break;
        default:
          this.status = "";
          this.tag = "";
          break;
      }
    },
    nextPage() {
      this.page++;
      this._getList();
    },
  },
};
</script>
<style lang='scss' scoped>
</style>