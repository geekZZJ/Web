<!--
 * @Author: zzj
 * @Date: 2020-11-25 22:17:51
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-26 15:16:04
 * @Description: 
-->
<template>
  <div
    class="fly-panel fly-panel-user"
    pad20
  >
    <div
      class="layui-tab layui-tab-brief"
      lay-filter="user"
      id="LAY_msg"
      style="margin-top: 15px;"
    >
      <button
        class="layui-btn layui-btn-danger"
        id="LAY_delallmsg"
        @click="clearAll()"
      >清空全部消息</button>
      <div
        id="LAY_minemsg"
        style="margin-top: 10px;"
      >
        <!--<div class="fly-none">您暂时没有最新消息</div>-->
        <ul class="mine-msg">
          <li
            v-for="(item,index) in lists"
            :key="'comments' + index"
          >
            <blockquote class="layui-elem-quote">
              <a
                href="/jump?username=Absolutely"
                target="_blank"
              >
                <cite>{{item.cuid.name}}</cite>
              </a>回答了您的求解
              <a
                target="_blank"
                href="/jie/8153.html/page/0/#item-1489505778669"
              >
                <cite>{{item.title}}</cite>
              </a>
            </blockquote>
            <div v-richtext="item.content"></div>
            <p>
              <span>{{ item.created | moment}}</span>
              <a
                href="javascript:;"
                class="layui-btn layui-btn-small layui-btn-danger fly-delete"
                @click="clear(item)"
              >删除</a>
            </p>
          </li>
        </ul>
        <imooc-page
          v-show="total > 0"
          :total="total"
          :current="page"
          :align="'left'"
          :hasTotal="true"
          :hasSelect="true"
          @changeCurrent="handleChange"
        ></imooc-page>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-msg",
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
</style>