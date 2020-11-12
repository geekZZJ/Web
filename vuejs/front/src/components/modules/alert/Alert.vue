<!--
 * @Author: zzj
 * @Date: 2020-11-12 11:09:48
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-12 16:28:57
 * @Description: 
-->
<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{msg}}</div>
      <div v-if="type==='alert'">
        <div
          class="btnCommon success"
          @click="close"
        >确认</div>
      </div>
      <div
        v-else
        class="space-around"
      >
        <div
          class="btnCommon cancel"
          @click="cancelEvent"
        >取消</div>
        <div
          class="btnCommon success"
          @click="successEvent"
        >确认</div>
      </div>
    </div>
    <div
      class="mask"
      @click="closeMask"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    type: {
      type: String,
      default: "alert",
    },
    msg: {
      type: String,
      default: "",
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Function,
      default: () => {
        console.log("点击了suc");
      },
    },
    cancel: {
      type: Function,
      default: () => {
        console.log("点击了cancel");
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    close() {
      this.isShow = false;
    },
    closeMask() {
      if (this.type === "alert") {
        this.close();
      }
    },
    cancelEvent() {
      this.cancel();
      this.close();
    },
    successEvent() {
      this.success();
      this.close();
    },
  },
};
</script>
<style lang='scss' scoped>
$btn-main: #009688;
$btn-dark: darken($btn-main, 5%);
.alert {
  width: 300px;
  height: 150px;
  position: fixed;
  background: #fff;
  border-radius: 6px;
  left: 50%;
  top: 50%;
  margin-left: -150px;
  margin-top: -75px;
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .flex {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .space-around {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 10px;
  }
  .btnCommon {
    width: 105px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 6px;
    cursor: pointer;
    &.success {
      background: $btn-main;
      color: #fff;
      &:hover {
        background: $btn-dark;
      }
    }
    &.cancel {
      background: #ededed;
      color: #333;
    }
  }
}
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  z-index: 99;
}
</style>