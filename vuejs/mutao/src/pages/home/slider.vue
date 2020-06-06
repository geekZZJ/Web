/**
* @name: slider
* @author: 张中俊
* @date: 2020/6/6 11:56
* @description：slider
* @update: 2020/6/6 11:56
*/
<template>
    <div class="slider-wapper">
        <me-loading v-if="!sliders.length"></me-loading>
        <me-slider
                :direction="direction"
                :loop="loop"
                :interval="interval"
                :pagination="pagination"
                v-else
        >
            <swiper-slide
                    v-for="(item, index) in sliders"
                    :key="index"
            >
                <a :href="item.linkUrl" alt="" class='slider-link'>
                    <img :src="item.picUrl" alt="" class='slider-img'>
                </a>
            </swiper-slide>
        </me-slider>
    </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {swiperSlide} from 'vue-awesome-swiper';
  import {sliderOptions} from './config';
  import {getHomeSlider} from 'api/home';
  import MeLoading from 'base/loading';

  export default {
    name: 'HomeSlider',
    components: {
      MeSlider,
      swiperSlide,
      MeLoading
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination,
        sliders: []
      };
    },
    created() {
      this.getSliders();
    },
    methods: {
      getSliders() {
        getHomeSlider().then(data => {
          console.log(data);
          this.sliders = data;
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
    .slider-wapper {
        width: 100%;
        height: 183px;
    }

    .slider-link {
        display: block;
    }

    .slider-link,
    .slider-img {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }
</style>
