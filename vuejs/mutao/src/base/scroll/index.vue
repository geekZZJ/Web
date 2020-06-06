/**
* @name: index
* @author: 张中俊
* @date: 2020/6/6 21:48
* @description：index
* @update: 2020/6/6 21:48
*/
<template>
    <swiper :options="swiperOption">
        <swiper-slide>
            <slot></slot>
        </swiper-slide>
        <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';

  export default {
    name: 'MeScroll',
    components: {
      swiper,
      swiperSlide
    },
    props: {
      scrollbar: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          setWrapperSize: true,
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          }
        }
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
