/**
* @name: header
* @author: 张中俊
* @date: 2020/6/3 17:00
* @description：header
* @update: 2020/6/3 17:00
*/
<template>
    <me-navbar class="header" title="title">
        <i class="iconfont icon-scan" slot="left"></i>
        <div slot="center">搜索框</div>
        <i class="iconfont icon-msg" slot="right"></i>
    </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  export default {
    name: 'HomeHeader',
    components: {
      MeNavbar
    }
  };
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
    .header{
        &.mine-navbar{
            background-color: transparent;
        }

        .iconfont{
            color: $icon-color-default;
            font-size: $icon-font-size;
        }
    }
</style>
