<template>
  <div class="reg">
    <div class="main">
      <div class="title">排课管理系统</div>
      <div class="content">
        <el-form :model="form" ref="form" status-icon :rules="rules" label-width="80px">
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="form.name"
              placeholder="用户名不大于10位"
              type="text"
              maxlength="10"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item label="账号" prop="account">
            <el-input
              v-model.number="form.account"
              placeholder="账号为8-10位数字"
              maxlength="10"
              minlength="8"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="form.pwd" placeholder="密码为8-10位" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input v-model="form.checkPass" show-password></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.gender">
              <el-radio label="0">男</el-radio>
              <el-radio label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-row style="margin-left: 53px">
              <el-col><el-button type="primary" @click="reg('form')">注册</el-button></el-col>
            </el-row>
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
  name: 'Reg',
  data () {
    var checkSpace = (rule, value, callback) => {
      for (let i = 0; i < value.length; i++) {
        if (value[i] === ' ') {
          return callback(new Error('不能有空格'))
        } else {
          callback()
        }
      }
    }
    var checkLength = (rule, value, callback) => {
      if (!new RegExp(/[0-9]{8,10}/).test(value)) {
        return callback(new Error('必须为8-10位'))
      } else {
        callback()
      }
    }
    var checkPsdLength = (rule, value, callback) => {
      if (!new RegExp(/^[a-zA-Z0-9]{8,10}$/).test(value)) {
        return callback(new Error('必须为8-10位'))
      } else {
        callback()
      }
    }
    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.pwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        account: '',
        pwd: '',
        checkPass: '',
        name: '',
        gender: '0'
      },
      rules: {
        name: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          { validator: checkSpace, trigger: 'blur' }
        ],
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {type: 'number', message: '账号必须为数字值', trigger: 'blur'},
          { validator: checkLength, trigger: 'blur' }
        ],
        pwd: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          { validator: checkPsdLength, trigger: 'blur' }
        ],
        checkPass: [
          { validator: checkPass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    reg (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/user/reg', {
            name: this.form.name,
            account: this.form.account,
            pwd: this.form.pwd,
            gender: this.form.gender
          }).then((response) => {
            let res = response.data
            console.log(res)
            if (res.status === '0') {
              this.$message({
                message: '注册成功',
                type: 'success'
              })
              this.$refs['form'].resetFields()
              this.$router.push({
                path: '/'
              })
              return true
            } else if (res.status === '3') {
              alert('账号已被注册')
              return false
            } else {
              alert('未知异常')
            }
          })
        } else {
          alert('信息请填写完整')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.reg {
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
