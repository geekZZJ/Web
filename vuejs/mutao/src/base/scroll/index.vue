/**
* @name: index
* @author: 张中俊
* @date: 2020/6/6 21:48
* @description：index
* @update: 2020/6/6 21:48
*/
<template>
    <swiper :options="swiperOption" ref="swiper">
        <div class="mine-scroll-pull-down" v-if="pullDown">
            <me-loading :text="pullDownText" inline ref="pullDownLoading"></me-loading>
        </div>
        <swiper-slide>
            <slot></slot>
        </swiper-slide>
        <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import MeLoading from 'base/loading';
  import {
    PULL_DOWN_HEIGHT,
    PULL_DOWN_TEXT_END,
    PULL_DOWN_TEXT_ING,
    PULL_DOWN_TEXT_INIT,
    PULL_DOWN_TEXT_START
  } from './config';

  export default {
    name: 'MeScroll',
    components: {
      swiper,
      swiperSlide,
      MeLoading
    },
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      },
      data: {
        type: [Array, Object]
      },
      pullDown: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      data() {
        this.update();
      }
    },
    methods: {
      update() {
        this.$refs.swiper && this.$refs.swiper.swiper.update();
      },
      scroll() {
        const swiper = this.$refs.swiper.swiper;
        if (this.pulling) {
          return;
        }
        if (swiper.translate > 0) {
          if (!this.pullDown) {
            return;
          }
          if (swiper.translate > PULL_DOWN_HEIGHT) {
            this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
          } else {
            this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
          }
        }
      },
      touchEnd() {
        if (this.pulling) {
          return;
        }
        const swiper = this.$refs.swiper.swiper;
        if (swiper.translate > PULL_DOWN_HEIGHT) {
          if (!this.pullDown) {
            return;
          }
          this.pulling = true;
          swiper.allowTouchMove = false;// 禁止触摸
          swiper.setTransition(swiper.params.speed);
          swiper.setTranslate(PULL_DOWN_HEIGHT);
          swiper.params.virtualTranslate = true;// 定住不给回弹
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING);
          this.$emit('pull-down', this.pullDownEnd);// 触发一个事件
        }
      },
      pullDownEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.pulling = false;
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
        swiper.params.virtualTranslate = false;
        swiper.allowTouchMove = true;
        swiper.setTransition(swiper.params.speed);
        swiper.setTranslate(0);
        /* setTimeout(() => {
          this.$emit('pull-down-transition-end');
        }, swiper.params.speed); */
      }
    },
    data() {
      return {
        pulling: false,
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true,
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          },
          on: {
            sliderMove: this.scroll,
            touchEnd: this.touchEnd
          }
        },
        pullDownText: PULL_DOWN_TEXT_START
      };
    }
  };
</script>

<style lang="scss" scoped>
    .swiper-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        height: auto;
    }
    .mine-scroll-pull-up,
    .mine-scroll-pull-down {
        position: absolute;
        left: 0;
        width: 100%;
    }
    .mine-scroll-pull-down {
        bottom: 100%;
        height: 80px;
    }
    .mine-scroll-pull-up {
        top: 100%;
        height: 30px;
    }
</style>
