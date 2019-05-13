<template>
  <div class="main">
    <div class="login">
      <div class="header">
        <span class="logo">燕</span>
      </div>
      <div class="body">
        <div class="error" v-show="errorTip"><i class="el-icon-error"></i>{{tip}}</div>
        <div class="username">
          <el-input placeholder="请输入用户名" v-model="username">
            <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
          </el-input>
        </div>
        <div class="password">
          <el-input placeholder="请输入密码" v-model="psd" show-password>
            <i slot="prefix" class="el-input__icon el-icon-lock"></i>
          </el-input>
        </div>
        <div class="reg">
          <span>注册</span>
        </div>
        <div class="submit">
          <el-button type="success" round style="padding: 10px 87px" @click="login">登录</el-button>
        </div>
      </div>
      <div class="footer">
        <div class="tip">------社交账号登录------</div>
        <div class="other">
          <img src="../../static/wechat.png" alt="">
          <img src="../../static/qq.png" alt="">
          <img src="../../static/weibo.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: '',
      psd: '',
      errorTip: false,
      tip: ''
    }
  },
  methods: {
    login () {
      if (this.username === '') {
        this.tip = '用户名不能为空'
        this.errorTip = true
        return false
      }
      if (this.psd === '') {
        this.tip = '密码不能为空'
        this.errorTip = true
        return false
      } else {
        axios.post('/users/login', {
          username: this.username,
          psd: this.psd
        }).then((response) => {
          let res = response.data
          console.log(res)
          if (res.status === '0') {
            this.errorTip = false
            this.$router.push({path: '/list'})
          } else {
            this.tip = '用户名或密码错误'
            this.errorTip = true
          }
        })
      }
    }
  }
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.main{
  width: 100%;
  height: 580px;
  background-image: url("../../static/bg.jpg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.login{
  width: 270px;
  height: 420px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .04);
}
.header{
  height: 100px;
  text-align: center;
}
.logo{
  display: inline-block;
  line-height: 60px;
  font-family: "PingFang SC";
  font-size: 25px;
  width: 60px;
  height: 60px;
  background-color: #409EFF;
  border-radius: 50%;
  margin: 20px 0;
  color: #FFF;
}
.body{
  width: 200px;
  height: 180px;
  margin: 0 auto;
}
.error{
  height: 20px;
  font-size: 13px;
  color: #F56C6C;
}
.password{
  margin-top: 20px;
}
.reg{
  font-size: 12px;
  margin: 10px 0;
  color: #909399;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.submit{
  text-align: center;
}
.footer{
  width: 190px;
  margin: 0 auto;
}
.tip{
  font-size: 12px;
  color: #909399;
  text-align: center;
}
.other{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 25px;
}
.other img{
  width: 40px;
  height: 40px;
}
</style>
