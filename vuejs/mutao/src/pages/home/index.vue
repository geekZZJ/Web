/**
* @name: index
* @author: 张中俊
* @date: 2020/6/6 11:03
* @description：index
* @update: 2020/6/6 11:03
*/
<template>
    <div class="home">
        <header class="g-header-container">
            <home-header></home-header>
        </header>
        <me-scroll>
            <home-slider/>
            <home-nav></home-nav>
        </me-scroll>
        <home-slider></home-slider>
        <div class="g-backtop-container"></div>
        <router-view></router-view>
    </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeSlider from './slider';
  import MeScroll from 'base/scroll';
  import HomeNav from './nav';
  export default {
    name: 'index',
    components: {
      HomeSlider,
      HomeHeader,
      MeScroll,
      HomeNav
    }
  };
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
    .home {
        overflow: hidden;
        width: 100%;
        height: 100%;
        background-color: $bgc-theme;
    }
</style>
