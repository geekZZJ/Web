<template>
  <el-row type="flex" justify="space-around" class="class">
    <el-col :span="7">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="姓名" prop="teaName">
          <el-input v-model="form.teaName" placeholder='请输入教师姓名'></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="teaAge">
          <el-input v-model.number="form.teaAge" placeholder='请输入教师年龄'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add('form')" style="margin-left: -80px">添加</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Teacher',
  data () {
    return {
      form: {
        teaName: '',
        teaAge: ''
      },
      rules: {
        teaName: [
          {required: true, message: '姓名不能为空', trigger: 'blur'}
        ],
        teaAge: [
          {required: true, message: '年龄不能为空', trigger: 'blur'},
          {type: 'number', message: '年龄必须为数字值'}
        ]
      }
    }
  },
  methods: {
    add (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/teacher/add', {
            teaName: this.form.teaName,
            teaAge: this.form.teaAge
          }).then((response) => {
            let res = response.data
            console.log(res)
            if (res.status === '0') {
              this.$message({
                message: '添加成功',
                type: 'success'
              })
              this.$refs['form'].resetFields()
              return true
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
.class {
  margin-top: 100px;
}
</style>
