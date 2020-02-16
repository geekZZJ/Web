<template>
  <div class="main">
    <el-form :label-position="labelPosition" label-width="80px" :model="editForm">
      <el-form-item label="时间">
        <el-input v-model="editForm.time" :readonly="true"></el-input>
      </el-form-item>
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
import axios from 'axios'
export default {
  data () {
    return {
      labelPosition: 'top',
      editForm: {
        title: '',
        content: '',
        time: ''
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let thingId = parseInt(this.$route.params.thingId)
      axios.get('/notes/detail').then((response) => {
        let res = response.data
        // console.log(res)
        if (res.status === '0') {
          for (let i = 0; i < res.result.length; i++) {
            if (res.result[i].thingId === thingId) {
              this.editForm.title = res.result[i].thingTitle
              this.editForm.content = res.result[i].thingContent
              this.editForm.time = res.result[i].thingTime
            }
          }
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
