/**
* @name: home
* @author: 张中俊
* @date: 2020/5/24 16:29
* @description：home
* @update: 2020/5/24 16:29
*/
<template>
    <div class="home-page">
        <v-header></v-header>
        <ul class="nav">
            <li v-for="item in arrList">
                <img :src="item.imgUrl"/>
                <span>{{item.name}}</span>
            </li>
        </ul>
        <v-course :arrList="array"></v-course>
        <v-footer></v-footer>
    </div>
</template>

<script>
  import Header from "@/components/header/index"
  import course from "@/components/course/index"
  import Footer from "@/components/footer/index"

  export default {
    data() {
      return {
        arrList: [],
        array: []
      }
    },
    mounted() {
        this.arrList = [
        {
          imgUrl: require("../assets/web.png"),
          name: "前端开发"
        },
        {
          imgUrl: require("../assets/webservice.png"),
          name: "后端开发"
        },
        {
          imgUrl: require("../assets/move.png"),
          name: "移动开发"
        },
        {
          imgUrl: require("../assets/data.png"),
          name: "数据库"
        }
      ],
        this.array = [
          {
            imgUrl: require("../assets/course1.jpg"),
            title: "实例妙解Sed和Awk的秘密",
            msg: "中级 · 330人在学"
          },
          {
            imgUrl: require("../assets/course2.jpg"),
            title: "实例妙解Sed和Awk的秘密",
            msg: "中级 · 330人在学"
          },
          {
            imgUrl: require("../assets/course3.jpg"),
            title: "实例妙解Sed和Awk的秘密",
            msg: "中级 · 330人在学"
          },
          {
            imgUrl: require("../assets/course4.jpg"),
            title: "实例妙解Sed和Awk的秘密",
            msg: "中级 · 330人在学"
          },
          {
            imgUrl: require("../assets/course5.jpg"),
            title: "实例妙解Sed和Awk的秘密",
            msg: "中级 · 330人在学"
          },
          {
            imgUrl: require("../assets/course1.jpg"),
            title: "实例妙解Sed和Awk的秘密",
            msg: "中级 · 330人在学"
          },
          {
            imgUrl: require("../assets/course1.jpg"),
            title: "实例妙解Sed和Awk的秘密",
            msg: "中级 · 330人在学"
          }
        ]
    },
    components: {
      "v-header": Header,
      "v-course": course,
      "v-footer": Footer
    }
  }
</script>

<style scoped>
    .home-page .nav {
        height: 100px;
        padding-top: 44px;
        background: #F3F5F7;
        overflow-x: scroll;
        white-space: nowrap;
        font-size: 0;
    }

    .nav li {
        width: 88px;
        display: inline-block;
        text-align: center;
        font-size: 14px;
    }

    .nav li img {
        display: block;
        width: 32px;
        margin: 20px auto 12px;
    }
</style>
