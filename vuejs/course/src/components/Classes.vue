<template>
  <el-row type="flex" justify="space-around" class="class">
    <el-col :span="7">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="学院" prop="academy">
          <el-input v-model="form.academy" placeholder='请输入学院'></el-input>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-input v-model="form.major" placeholder='请输入专业'></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="className">
          <el-input v-model="form.className" placeholder='请输入班级'></el-input>
        </el-form-item>
        <el-form-item label="容量" prop="classCount">
          <el-input v-model.number="form.classCount" placeholder='请输入班级容量'></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="add('form')" style="float: left">添加</el-button>
          <el-button @click="resetForm('form')" style="float: right">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Classes',
  data () {
    return {
      form: {
        academy: '',
        major: '',
        className: '',
        classCount: ''
      },
      rules: {
        academy: [
          {required: true, message: '学院名不能为空', trigger: 'blur'}
        ],
        major: [
          {required: true, message: '专业名不能为空', trigger: 'blur'}
        ],
        className: [
          {required: true, message: '班级名不能为空', trigger: 'blur'}
        ],
        classCount: [
          {required: true, message: '班级容量不能为空', trigger: 'blur'},
          {type: 'number', message: '班级容量必须为数字值', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    add (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/class/class', {
            academy: this.form.academy,
            major: this.form.major,
            className: this.form.className,
            classCount: this.form.classCount
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
