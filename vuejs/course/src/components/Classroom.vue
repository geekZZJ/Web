<template>
  <el-row type="flex" justify="space-around" class="class">
    <el-col :span="7">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="地址" prop="classroomAdd">
          <el-input v-model="form.classroomAdd" placeholder='请输入教室地址'></el-input>
        </el-form-item>
        <el-form-item label="容量" prop="classroomCapacity">
          <el-input v-model.number="form.classroomCapacity" placeholder='请输入教室容量'></el-input>
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
  name: 'Classroom',
  data () {
    return {
      form: {
        classroomAdd: '',
        classroomCapacity: ''
      },
      rules: {
        classroomAdd: [
          {required: true, message: '教室地址不能为空', trigger: 'blur'}
        ],
        classroomCapacity: [
          {required: true, message: '教室容量不能为空', trigger: 'blur'},
          {type: 'number', message: '教室容量必须为数字值'}
        ]
      }
    }
  },
  methods: {
    add (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post('/classroom/add', {
            classroomAdd: this.form.classroomAdd,
            classroomCapacity: this.form.classroomCapacity
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
