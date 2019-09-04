<template>
  <div class="main">
    <el-form :rules="rules" :label-position="labelPosition" label-width="80px" :model="editForm">
      <el-form-item label="标签" prop="title">
        <el-input v-model="editForm.title" maxlength="10" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" :rows="6" v-model="editForm.content"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'top',
      editForm: {
        title: '',
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
