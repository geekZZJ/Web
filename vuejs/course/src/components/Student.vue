<template>
  <el-row type="flex" justify="space-around" class="class">
    <el-col :span="7">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="学院" prop="academy">
          <el-select v-model="form.academy" placeholder="请选择学院" style="float: left;width: 291px">
            <el-option
              v-for="item in academy"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专业" prop="major">
          <el-select v-model="form.major" placeholder="请选择专业" style="float: left;width: 291px">
            <el-option
              v-for="item in major"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="班级" prop="className">
          <el-select v-model="form.className" placeholder="请选择班级" style="float: left;width: 291px">
            <el-option
              v-for="item in className"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名" prop="stuName">
          <el-input v-model="form.stuName" placeholder='请输入学生姓名'></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.stuGender" style="margin-left: -160px">
            <el-radio label="0">男</el-radio>
            <el-radio label="1">女</el-radio>
          </el-radio-group>
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
  name: 'Course',
  data () {
    return {
      academy: [{
        value: '计算机与软件工程学院',
        label: '计算机与软件工程学院'
      }],
      major: [{
        value: '物联网工程',
        label: '物联网工程'
      }, {
        value: '软件工程',
        label: '软件工程'
      }, {
        value: '计算机科学与技术',
        label: '计算机科学与技术'
      }, {
        value: '信息安全',
        label: '信息安全'
      }],
      className: [{
        value: '一班',
        label: '一班'
      }, {
        value: '二班',
        label: '二班'
      }, {
        value: '三班',
        label: '三班'
      }, {
        value: '四班',
        label: '四班'
      }],
      form: {
        academy: '',
        major: '',
        className: '',
        stuName: '',
        stuGender: '0'
      },
      rules: {
        stuName: [
          {required: true, message: '学生姓名必填', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    add (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/student/add', {
            academy: this.form.academy,
            major: this.form.major,
            className: this.form.className,
            stuName: this.form.stuName,
            stuGender: this.form.stuGender
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
