/**
* @name: slider
* @author: 张中俊
* @date: 2020/6/3 18:13
* @description：slider
* @update: 2020/6/3 18:13
*/
<template>
    <div class="slider-wrapper">
        <me-slider
                :direction="direction"
                :loop="loop"
                :interval="interval"
                :pagination="pagination"
        >
            <swiper-slide v-for="(item,index) in sliders" :key="index">
                <a :href="item.linkUrl" class="slider-link">
                    <img :src="item.picUrl" alt="" class="slider-img">
                </a>
            </swiper-slide>
        </me-slider>
    </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {SwiperSlide} from 'vue-awesome-swiper';
  import {sliderOption} from './config';
  export default {
    name: 'HomeSlider',
    components: {
      MeSlider,
      SwiperSlide
    },
    data() {
      return {
        direction: sliderOption.direction,
        loop: sliderOption.loop,
        interval: sliderOption.interval,
        pagination: sliderOption.pagination,
        sliders: [
          {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./1.jpg')
          },
          {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./2.jpg')
          },
          {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./3.jpg')
          }, {
            'linkUrl': 'https://www.imooc.com',
            'picUrl': require('./4.jpg')
          }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
    .slider-wrapper{
        height: 183px;
    }
    .slider-link{
        display: block;
    }
    .slider-link,
    .slider-img{
        width: 100%;
        height: 100%;
    }
</style>
