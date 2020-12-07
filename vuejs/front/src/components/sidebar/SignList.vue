<!--
 * @Author: zzj
 * @Date: 2020-12-06 12:56:02
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-06 13:20:09
 * @Description: 
-->
<template>
  <div
    class="modal"
    v-show="isShow"
  >
    <div
      class="mask"
      @click="close"
    ></div>
    <div
      class="layui-layer layui-layer-page"
      :class="{'active':isShow}"
    >
      <div class="layui-layer-title">签到活跃榜 - TOP
        <i
          class="layui-icon layui-icon-close pull-right"
          @click="close"
        ></i>
      </div>
      <div class="layui-layer-content pd0">
        <div class="layui-tab layui-tab-brief">
          <ul class="layui-tab-title">
            <li
              :class="{'layui-this':current===0}"
              @click="choose(0)"
            >最新签到</li>
            <li
              :class="{'layui-this':current===1}"
              @click="choose(1)"
            >今日最快</li>
            <li
              :class="{'layui-this':current===2}"
              @click="choose(2)"
            >总签到榜</li>
          </ul>
          <div class="layui-tab-content">
            <ul class="layui-tab-item layui-show">
              <li
                v-for="item in lists"
                :key="item"
              >
                <img
                  src="/img/bear-200-200.jpg"
                  alt=""
                  class="mr1"
                >
                <cite class="fly-link">{{item.name}}</cite>
                <span
                  class="fly-grey"
                  v-if="current!==2"
                >签到于{{item.created}}</span>
                <span
                  class="fly-grey"
                  v-else
                >已经连续签到<i class="orange">{{item.count}}</i>天</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signList",
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      current: 0,
      lists: [],
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    choose(val) {
      this.current = val;
    },
    close() {
      this.$emit("closeModal");
    },
  },
};
</script>
<style lang='scss' scoped>
</style>