<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="16">
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="ID"
          width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.stuId }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <div class="name-wrapper">
              <el-tag size="medium">{{ scope.row.stuName }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="性别"
          width="180">
          <template slot-scope="scope">
            <span v-if="scope.row.stuGender">男</span>
            <span v-else>女</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Stuinfo',
  data () {
    return {
      tableData: []
    }
  },
  mounted () {
    this.show()
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
      axios.post('/student/del', {
        stuId: row.stuId
      }).then((response) => {
        let res = response.data
        console.log(res)
        if (res.status === '0') {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.show()
          return true
        } else {
          alert('未知异常')
        }
      })
    },
    show () {
      axios.get('/student/show').then((response) => {
        let res = response.data
        console.log(res)
        if (res.status === '0') {
          this.tableData = res.data
          console.log(this.tableData)
          return true
        } else {
          alert('未知异常')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
