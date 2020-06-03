/**
* @name: index
* @author: 张中俊
* @date: 2020/6/3 18:16
* @description：index
* @update: 2020/6/3 18:16
*/
<template>
    <swiper :options="swiperOption">
        <slot></slot>
        <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
  import {Swiper} from 'vue-awesome-swiper';
  export default {
    name: 'MeSlider',
    components: {
      Swiper
    },
    props: {
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) > -1;
        }
      },
      interval: {
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      pagination: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        swiperOption: {
          watchOverflow: true,
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false
          } : false,
          slidesPerView: 1,
          loop: this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
    .swiper-container{
        width: 100%;
        height: 100%;
    }
</style>
