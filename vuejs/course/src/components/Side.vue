<template>
  <el-row class="tac">
    <el-col :span="24">
      <div class="logo">排课管理系统</div>
      <el-menu
        default-active="2-2"
        class="el-menu-vertical-demo"
        :unique-opened="true"
        background-color="#20222A"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>信息录入</span>
          </template>
          <el-menu-item-group>
            <router-link to="/admin/classes" class="line">
              <el-menu-item index="1-1">班级信息</el-menu-item>
            </router-link>
            <router-link to="/admin/course" class="line">
              <el-menu-item index="1-2">课程信息</el-menu-item>
            </router-link>
            <router-link to="/admin/teacher" class="line">
              <el-menu-item index="1-3">教师信息</el-menu-item>
            </router-link>
            <router-link to="/admin/classroom" class="line">
              <el-menu-item index="1-4">教室信息</el-menu-item>
            </router-link>
            <router-link to="/admin/student" class="line">
              <el-menu-item index="1-5">学生信息</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>师生管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/admin/stuinfo" class="line">
              <el-menu-item index="2-1">学生信息</el-menu-item>
            </router-link>
            <router-link to="/admin/teainfo" class="line">
              <el-menu-item index="2-2">教师信息</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3" disabled>
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>排课管理</span>
          </template>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>课表打印</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">学生</el-menu-item>
            <el-menu-item index="4-2">老师</el-menu-item>
            <el-menu-item index="4-3">教室</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-files"></i>
            <span>系统维护</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">数据安全管理</el-menu-item>
            <el-menu-item index="5-2">操作员管理</el-menu-item>
            <el-menu-item index="5-3">权限设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Side',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.logo{
  background-color: #20222A;
  color: #fff;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.tac{
  height: 100%;
}
.line {
  text-decoration: none;
}
</style>
