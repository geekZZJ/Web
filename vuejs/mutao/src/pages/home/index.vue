/**
* @name: index
* @author: 张中俊
* @date: 2020/6/3 16:25
* @description：index
* @update: 2020/6/3 16:25
*/
<template>
    <div class="home">
        <header class="g-header-container">
            <home-header></home-header>
        </header>
        <div>
            <home-slider></home-slider>
        </div>
        <div class="g-backtop-container"></div>
        <router-view></router-view>
    </div>
</template>

<script>
  import HomeHeader from './header';
  import HomeSlider from './slider';
  export default {
    name: 'index',
    components: {
      HomeHeader,
      HomeSlider
    }
  };
</script>

<style scoped>

</style>
