<template>
  <el-container>
    <el-aside width="200px">
      <Side></Side>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script>
import Side from '@/components/Side'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Side,
    Header,
    Footer
  }
}
</script>

<style scoped>
.el-aside {
  background-color: #20222A;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  height: 600px;
}
.el-header{
  background-color: #fff;
}
</style>
