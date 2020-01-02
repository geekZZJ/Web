<template>
  <el-row type="flex" justify="space-around" class="class">
    <el-col :span="7">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="课程类别" prop="class">
          <el-select v-model="form.class" placeholder="请选择课程类别" style="float: left;width: 291px">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="课程名" prop="courseName">
          <el-input v-model="form.courseName" placeholder='请输入课程名称'></el-input>
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
      options: [{
        value: '1',
        label: '学科基础核心课'
      }, {
        value: '2',
        label: '学科基础必修课'
      }, {
        value: '3',
        label: '学科基础选修课'
      }, {
        value: '4',
        label: '专业必修课'
      }, {
        value: '5',
        label: '专业选修课'
      }],
      form: {
        class: '',
        courseName: ''
      },
      rules: {
        class: [
          {required: true, message: '课程类别必选', trigger: 'change'}
        ],
        courseName: [
          {required: true, message: '课程名不能为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    add (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/course/add', {
            class: this.form.class,
            courseName: this.form.courseName
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
