<template>
    <div>
      <span>这是商品列表页面</span>
      <span>{{$route.params.goodId}}</span>
      <span>{{$route.params.name}}</span>
      <router-link to="/goods/title">显示商品标题</router-link>
      <router-link to="/goods/images">显示商品图片</router-link>
      <router-link to="/cart">跳到购物车页面</router-link>
      <button @click="jump">跳转到购物车页面</button>
      <div>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        methods:{
          jump:function () {
            // this.$router.push("/cart")
            this.$router.push({path:'/cart?goodId=123'})
          }
        }
    }
</script>

<style scoped>

</style>
