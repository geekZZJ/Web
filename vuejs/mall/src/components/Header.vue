<template>
  <header>
    <span class="title">燕笔记</span>
    <el-dropdown class="func" trigger="click">
      <i class="el-icon-s-grid"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item divided @click.native="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span class="search">
      <i class="el-icon-search"></i>
    </span>
  </header>
</template>

<script>
export default {
  methods: {
    logout () {
      console.log(123456)
    }
  }
}
</script>

<style scoped>
header{
  height: 55px;
  line-height: 55px;
  background-color: #409EFF;
  color: #fff;
}
.title{
  font-size: 18px;
  margin-left: 25px;
}
.search{
  float: right;
  margin-right: 28px;
  font-size: 18px;
}
.func{
  float: right;
  margin-right: 15px;
  font-size: 18px;
  color: #fff;
}
</style>
