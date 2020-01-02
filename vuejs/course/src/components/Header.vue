<template>
  <el-row>
    <el-col :span="22">
      <el-breadcrumb separator="/" class="bread">
        <el-breadcrumb-item ref="mainMenu">{{mainName}}</el-breadcrumb-item>
        <el-breadcrumb-item>
          <span class="subMenu">{{breadName}}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="2" class="userName">
      <el-dropdown>
        <span class="el-dropdown-link">
          <span>{{name}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <router-link :to="'/admin/center/'+adminId" class="center" @click.native="jump">个人中心</router-link>
          </el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Header',
  data () {
    return {
      name: '',
      adminId: '',
      breadName: '教师信息',
      mainName: '师生管理'
    }
  },
  created () {
    this.checkLogin()
  },
  methods: {
    jump () {
      this.breadName = '用户中心'
      this.$refs.mainMenu.$el.children[0].style.display = 'none'
    },
    checkLogin () {
      axios.get('/user/checkLogin').then((response) => {
        let res = response.data
        console.log(res)
        if (res.status === '0') {
          this.name = res.data.userName
          this.adminId = res.data.adminId
        } else {
          this.$router.push({path: '/'})
        }
      })
    },
    logout () {
      axios.post('/user/logout').then((response) => {
        let res = response.data
        if (res.status === '0') {
          this.name = ''
          this.$router.push({path: '/'})
        }
      })
    }
  }
}
</script>

<style scoped>
.bread{
  height: 60px;
  line-height: 60px;
}
.userName{
  height: 60px;
  line-height: 60px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.subMenu{
  cursor: pointer;
}
.center{
  text-decoration: none;
}
</style>
