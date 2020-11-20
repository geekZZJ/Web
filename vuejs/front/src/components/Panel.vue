<!--
 * @Author: zzj
 * @Date: 2020-11-17 10:47:09
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-20 20:13:33
 * @Description: 
-->
<template>
  <div class="fly-panel fly-column">
    <div class="layui-container">
      <ul class="layui-clear">
        <router-link
          tag="li"
          class="layui-hide-xs"
          to="/"
        >
          <a href="/">首页</a>
        </router-link>
        <router-link
          v-for="item in lists"
          :key="item.path"
          tag="li"
          :to="item.path"
        >
          <a href="">{{item.name}}<span
              class="layui-badge-dot"
              v-if="item.isNew"
            ></span></a>
        </router-link>
        <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><span class="fly-mid"></span></li>

        <!-- 用户登入后显示 -->
        <template v-if="isLogin">
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a href="user/index.html">我发表的贴</a></li>
          <li class="layui-hide-xs layui-hide-sm layui-show-md-inline-block"><a href="user/index.html#collection">我收藏的贴</a></li>
        </template>
      </ul>

      <div class="fly-column-right layui-hide-xs">
        <span class="fly-search"><i class="layui-icon"></i></span>
        <a
          href="jie/add.html"
          class="layui-btn"
        >发表新帖</a>
      </div>
      <div
        class="layui-hide-sm layui-show-xs-block"
        style="margin-top: -10px; padding-bottom: 10px; text-align: center;"
      >
        <a
          href="jie/add.html"
          class="layui-btn"
        >发表新帖</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "panel",
  data() {
    return {
      lists: [
        {
          name: "提问",
          path: "/index/ask",
          isNew: false,
        },
        {
          name: "分享",
          path: "/index/share",
          isNew: true,
        },
        {
          name: "讨论",
          path: "/index/discuss",
          isNew: false,
        },
        {
          name: "建议",
          path: "/index/advice",
          isNew: false,
        },
        {
          name: "公告",
          path: "/index/notice",
          isNew: false,
        },
        {
          name: "动态",
          path: "/index/logs",
          isNew: false,
        },
      ],
      isLogin: this.$store.state.isLogin,
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {},
};
</script>
<style lang='scss' scoped>
</style>