<template>
  <div class="main">
    <el-form :label-position="labelPosition" label-width="80px" :model="editForm">
      <el-form-item label="标签">
        <el-input v-model="editForm.title" :readonly="true"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="8" v-model="editForm.content" :readonly="true"></el-input>
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
