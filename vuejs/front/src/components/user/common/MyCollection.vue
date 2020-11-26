<!--
 * @Author: zzj
 * @Date: 2020-11-26 14:00:08
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-26 14:19:03
 * @Description: 
-->
<template>
  <div>
    <table class="layui-table">
      <thead>
        <tr>
          <th class="title">
            <div class="layui-table-cell pl0">
              <span>帖子标题</span>
            </div>
          </th>
          <th>
            <div class="layui-table-cell text-right pr0">
              <span>收藏时间</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,index) in list"
          :key="'mycollect' + index"
        >
          <td class="title">
            <router-link
              class="link"
              :to="{name: 'detail', params: {tid: item.tid}}"
            >{{item.title}}</router-link>
          </td>
          <td class="text-right">{{item.created | moment}}</td>
        </tr>
      </tbody>
    </table>
    <imooc-page
      v-show="total > 0"
      :total="total"
      :current="current"
      :align="'left'"
      :hasTotal="true"
      :hasSelect="true"
      @changeCurrent="handleChange"
    ></imooc-page>
  </div>
</template>

<script>
export default {
  name: "mycollection",
  components: {},
  data() {
    return {};
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
.title {
  width: 70%;
}
</style>