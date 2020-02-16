<template>
  <div class="login">
    <div class="main">
      <div class="title">排课管理系统</div>
      <div class="content">
        <el-form :model="form" ref="form" :rules="rules" label-width="60px">
          <el-form-item label="账号" prop="account">
            <el-input v-model.number="form.account"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="form.pwd" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-link :underline="false" type="primary" style="float: right">忘记密码？</el-link>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('form')">登录</el-button>
            <el-button style="float: right" @click="reg">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <footer>@2019&nbsp;&nbsp;zhangblog.cn</footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        account: '',
        pwd: ''
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {type: 'number', message: '账号必须为数字值', trigger: 'blur'}
        ],
        pwd: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/user/login', {
            account: this.form.account,
            pwd: this.form.pwd
          }).then((response) => {
            let res = response.data
            console.log(res)
            if (res.status === '0') {
              this.$router.push({
                path: '/admin/teainfo'
              })
              return true
            }
            if (res.status === '1') {
              alert('密码错误')
              this.form.pwd = ''
              return true
            }
            if (res.status === '2') {
              alert('用户不存在')
              return true
            } else {
              alert('未知异常')
            }
          })
        } else {
          alert('请正确输入账号密码')
          return false
        }
      })
    },
    reg () {
      this.$router.push({path: '/reg'})
    }
  }
}
</script>

<style scoped>
  .login {
    padding: 100px 0;
  }

  .main {
    width: 375px;
    margin: 0 auto;
  }

  .title {
    text-align: center;
    padding: 20px;
    font-size: 26px;
    font-weight: 300;
  }

  .content {
    padding: 20px;
  }

  footer {
    text-align: center;
    position: fixed;
    bottom: 0;
    height: 30px;
    line-height: 30px;
    width: 100%;
    padding: 20px;
    color: rgba(0, 0, 0, .5);
    font-size: 14px;
  }
</style>
