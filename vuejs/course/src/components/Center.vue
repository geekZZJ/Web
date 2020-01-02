<template>
  <el-row type="flex" justify="space-around" class="center">
    <el-col :span="7">
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="form.account" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.gender">
            <el-radio label='0' disabled>男</el-radio>
            <el-radio label='1' disabled>女</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Center',
  data () {
    return {
      form: {
        name: '',
        account: '',
        gender: ''
      }
    }
  },
  created () {
    this.getInfo(this.$route.params.adminId)
  },
  methods: {
    getInfo (id) {
      axios.post('/user/info', {
        adminId: id
      }).then((response) => {
        let res = response.data
        console.log(res)
        if (res.status === '0') {
          this.form.name = res.data.userName
          this.form.account = res.data.userAccount
          this.form.gender = res.data.gender
          return true
        }
        if (res.status === '1001') {
          alert('当前用户未登录')
          this.$router.push({path: '/'})
        } else {
          alert('个人信息获取失败')
        }
      })
    }
  }
}
</script>

<style scoped>
.center{
  margin-top: 100px;
}
</style>
