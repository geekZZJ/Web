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
            <home-header :class="{'header-transition': isHeaderTransition}" ref="header"></home-header>
        </header>
        <me-scroll
                :data="recommends"
                pullDown
                pullUp
                @pull-down="pullToRefresh"
                @pull-up="pullToLoadMore"
                @scroll-end="scrollEnd"
                @scroll="scroll"
                @pull-down-transition-end="pullDownTransitionEnd"
                ref="scroll"
        >
            <home-slider ref="slider"/>
            <home-nav></home-nav>
            <home-recommend @loaded="getRecommends" ref="recommend"></home-recommend>
        </me-scroll>
        <home-slider></home-slider>
        <div class="g-backtop-container">
            <me-backtop :visible="isBacktopVisible" @backtop="backToTop"></me-backtop>
        </div>
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
  import {HEADER_TRANSITION_HEIGHT} from './config';
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
        recommends: [],
        isBacktopVisible: false,
        isHeaderTransition: false
      };
    },
    /* created() {
      setTimeout(() => {
        this.isBacktopVisible = true;
      }, 1000);
    }, */
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
      },
      scrollEnd(translate, scroll, pulling) {
        if (!pulling) {
          this.changeHeaderStatus(translate);
        }
        this.isBacktopVisible = translate < 0 && -translate > scroll.height;
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }
        this.$refs.header.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
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
