<!--
 * @Author: zzj
 * @Date: 2020-11-17 11:01:42
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-13 14:37:19
 * @Description: 
-->
<template>
  <div class="fly-panel fly-signin">
    <div class="fly-panel-title">
      签到
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" @click="showInfo">说明</a>
      <i class="fly-mid"></i>
      <a href="javascript:;" class="fly-link" @click="showTop">
        活跃榜
        <span class="layui-badge-dot"></span>
      </a>
      <span class="fly-signin-days">
        已连续签到
        <cite>{{count}}</cite>天
      </span>
    </div>
    <div class="fly-panel-main fly-signin-main">
      <template v-if="!isSign">
        <button class="layui-btn layui-btn-danger" @click="sign">今日签到</button>
        <span>
          可获得
          <cite>{{favs}}</cite>飞吻
        </span>
      </template>
      <!-- 已签到状态 -->
      <template v-else>
        <button class="layui-btn layui-btn-disabled">今日已签到</button>
        <span>
          获得了
          <cite>{{favs}}</cite>飞吻
        </span>
      </template>
    </div>
    <sign-info :isShow="isShow" @closeModal="close"></sign-info>
    <sign-list :isShow="showList" @closeModal="close"></sign-list>
  </div>
</template>

<script>
import SignInfo from "./SignInfo.vue";
import SignList from "./SignList.vue";
import { userSign } from "@/api/user";
export default {
  name: "sign",
  components: { SignInfo, SignList },
  data() {
    return {
      isShow: false,
      showList: false,
      current: 0,
      isSign: this.$store.state.userInfo.isSign
        ? this.$store.state.userInfo.isSign
        : false,
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  computed: {
    favs() {
      let count = parseInt(this.count);
      let result = 0;
      if (count < 5) {
        result = 5;
      } else if (count >= 5 && count < 15) {
        result = 10;
      } else if (count >= 15 && count < 30) {
        result = 15;
      } else if (count > 30 && count < 100) {
        result = 20;
      } else if (count >= 100 && count < 365) {
        result = 30;
      } else if (count >= 365) {
        result = 50;
      }
      return result;
    },
    count() {
      if (this.$store.state.userInfo !== {}) {
        if (typeof this.$store.state.userInfo.count !== "undefined") {
          return this.$store.state.userInfo.count;
        } else {
          return 0;
        }
      } else {
        return 0;
      }
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
  methods: {
    showInfo() {
      this.isShow = true;
    },
    close() {
      this.isShow = false;
      this.showList = false;
    },
    choose(val) {
      this.current = val;
    },
    showTop() {
      this.showList = true;
    },
    async sign() {
      if (!this.isLogin) {
        this.$pop("shake", "请先登录");
        return;
      }
      const result = await userSign();
      let userInfo = this.$store.state.userInfo;
      if (result.code === 200) {
        this.isSign = true;
        userInfo.favs = result.favs;
        userInfo.count = result.count;
        userInfo.isSign = true;
        this.$store.commit("setUserInfo", userInfo);
        this.$pop("", "签到成功");
      } else {
        this.$pop("", "您已经签到");
      }
    },
  },
};
</script>
<style lang='scss'>
@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
.mask {
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 20000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.layui-layer {
  position: fixed;
  width: 300px;
  height: 480px;
  top: 50%;
  left: 50%;
  margin-top: -240px;
  margin-left: -150px;
  background: #fff;
  z-index: 21000;
  &.active {
    animation-fill-mode: both;
    animation-duration: 0.2s;
    animation-name: bounceIn;
  }
  .layui-layer-title {
    height: 42px;
    line-height: 42px;
    padding: 0 20px;
    color: #333;
    background-color: #f8f8f8;
  }
  .layui-layer-content {
    padding: 20px;
  }
  .layui-tab-content {
    margin: 0 10px;
  }
  .layui-tab-item {
    line-height: 45px;
    li {
      border-bottom: 1px dotted #dcdcdc;
      &:last-child {
        border-bottom: none;
      }
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 2px;
    }
  }
}
</style>