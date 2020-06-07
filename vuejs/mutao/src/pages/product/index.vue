/**
* @name: index
* @author: 张中俊
* @date: 2020/6/6 11:03
* @description：index
* @update: 2020/6/6 11:03
*/
<template>
    <div class="product">product</div>
</template>

<script>
  export default {
    name: 'index'
  };
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
    .product {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        z-index: $product-z-index;
        width: 100%;
        height: 100%;
        background-color: $bgc-theme;
    }
</style>
