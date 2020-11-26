<!--
 * @Author: zzj
 * @Date: 2020-11-26 13:59:48
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-26 14:13:36
 * @Description: 
-->
<template>
  <div>
    <div class="overflow">
      <table
        class="layui-table"
        border="0"
      >
        <thead>
          <tr class="layui-table-header">
            <th>
              <div class="layui-table-cell pl0">
                <span>帖子标题</span>
              </div>
            </th>
            <th>
              <div class="layui-table-cell">
                <span>状态</span>
              </div>
            </th>
            <th>
              <div class="layui-table-cell">
                <span>结帖</span>
              </div>
            </th>
            <th>
              <div class="layui-table-cell">
                <span>发表时间</span>
              </div>
            </th>
            <th>
              <div class="layui-table-cell">
                <span>数据</span>
              </div>
            </th>
            <th class="min-cell">
              <div class="layui-table-cell">
                <span>操作</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="text-center"
            v-for="(item,index) in list"
            :key="'mypost' + index"
          >
            <td class="text-left">
              <router-link
                class="link"
                :to="{name: 'detail', params: {tid: item._id}}"
              >{{item.title}}</router-link>
            </td>
            <td>{{item.status === '0' ? '打开': '关闭'}}</td>
            <td :class="{'success': item.isEnd !=='0'}">{{item.isEnd === '0'? '未结': '已结贴'}}</td>
            <td>{{item.created | moment}}</td>
            <td>{{item.reads}}阅/{{item.answer}}答</td>
            <td>
              <div
                class="layui-btn layui-btn-xs"
                :class="{'layui-btn-disabled': item.isEnd === '1'}"
                @click="editPost(item)"
              >编辑</div>
              <div
                class="layui-btn layui-btn-xs layui-btn-danger"
                @click="deletePost(item)"
              >删除</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <imooc-page
      v-show="total > 1"
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
  name: "mypost",
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
.overflow {
  overflow-y: auto;
}
.min-cell {
  min-width: 80px;
}
.layui-table-header {
  th {
    text-align: center;
    &:first-child {
      text-align: left;
    }
  }
}
</style>