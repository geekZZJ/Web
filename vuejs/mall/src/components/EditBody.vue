<template>
  <div class="main">
    <el-form :rules="rules" ref="ruleForm" :label-position="labelPosition" label-width="80px" :model="editForm">
      <el-form-item label="标签" prop="title">
        <el-input v-model="editForm.title" maxlength="10" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" :rows="6" v-model="editForm.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="send('ruleForm')">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      labelPosition: 'top',
      editForm: {
        title: '',
        time: '',
        content: ''
      },
      rules: {
        title: [
          {required: true, message: '请输入笔记标题', trigger: 'blur'},
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
        ],
        content: [
          {required: true, message: '请输入笔记内容', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    send (formName) {
      let nowDate = new Date()
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/notes/send', {
            thingTitle: this.editForm.title,
            thingContent: this.editForm.content,
            thingTime: nowDate.toLocaleString()
          }).then((response) => {
            let res = response.data
            console.log(res)
            if (res.status === '0') {
              this.errorTip = false
              // this.$router.push({path: '/list'})
            } else {
              this.tip = '用户名或密码错误'
              this.errorTip = true
            }
          })
        } else {
          console.log('error submit')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.main{
  width: 80%;
  margin: 0 auto;
  margin-top: 60px;
}
</style>
