<!--
 * @Author: zzj
 * @Date: 2020-11-25 14:04:29
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-25 22:30:47
 * @Description: 
-->
<template>
  <div class="layui-container fly-marginTop fly-user-main">
    <ul
      class="layui-nav layui-nav-tree"
      lay-filter="test"
    >
      <li
        class="layui-nav-item"
        v-for="item in lists"
        :key="item.name"
      >
        <router-link :to="{name:item.link}">
          <i
            class="layui-icon"
            :class="item.icon"
          ></i>{{item.name}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "center",
  components: {},
  data() {
    return {
      lists: [
        { name: "我的主页", icon: "layui-icon-home", link: "UserCenter" },
        { name: "基本设置", icon: "layui-icon-set", link: "Set" },
        { name: "我的帖子", icon: "layui-icon-form", link: "Post" },
        { name: "我的消息", icon: "layui-icon-reply-fill", link: "Msg" },
        { name: "其他设置", icon: "layui-icon-component", link: "Others" },
      ],
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
.layui-icon {
  margin-right: 10px;
}
</style>