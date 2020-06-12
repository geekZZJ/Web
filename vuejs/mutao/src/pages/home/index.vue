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
        <me-scroll
                :data="recommends"
                pullDown
                pullUp
                @pull-down="pullToRefresh"
                @pull-up="pullToLoadMore"
        >
            <home-slider ref="slider"/>
            <home-nav></home-nav>
            <home-recommend @loaded="getRecommends" ref="recommend"></home-recommend>
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
  import HomeRecommend from './recommend';
  import MeBacktop from 'base/backtop';
  export default {
    name: 'index',
    components: {
      HomeSlider,
      HomeHeader,
      MeScroll,
      HomeNav,
      HomeRecommend,
      MeBacktop
    },
    data() {
      return {
        recommends: []
      };
    },
    methods: {
      updateScroll() {

      },
      getRecommends(recommends) {
        this.recommends = recommends;
      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end);
        /* setTimeout(() => {
          end();
        }, 1000); */
      },
      pullToLoadMore(end) {
        this.$refs.recommend.update().then(end).catch(err => {
          if (err) {
            console.log(err);
          }
          end();
        });
        /* setTimeout(() => {
          console.log('上拉');
          end();
        }, 1000); */
      }
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
