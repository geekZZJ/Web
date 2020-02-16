<template>
  <div>
    <div class="item" v-for="(item,index) in list" :key="item.thingId" v-on:click="detail(index)">
      <div class="title">{{item.thingTitle}}</div>
      <div class="time">{{item.thingTime}}</div>
      <el-dropdown class="more" trigger="click">
        <i class="el-icon-more"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><i class="el-icon-edit-outline"></i>编辑</el-dropdown-item>
          <el-dropdown-item><i class="el-icon-delete"></i>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      axios.get('/users/list').then((response) => {
        let res = response.data
        this.list = res.result
        // console.log(this.list)
      })
    },
    detail (index) {
      this.$router.push({path: '/detail/' + (index + 1)})
    }
  }
}
</script>

<style scoped>
.item{
  width: 92%;
  margin: 0 auto;
  height: 70px;
  border-radius: 8px;
  box-shadow: 0 0 6px rgba(0, 0, 0, .3);
  margin-bottom: 15px;
  position: relative;
}
.title{
  height: 45px;
  line-height: 45px;
  margin-left: 15px;
  font-size: 25px;
  color: #606266;
}
.time{
  height: 25px;
  line-height: 25px;
  margin-left: 15px;
  font-size: 12px;
  color: #909399;
}
.more{
  position: absolute;
  top: 0;
  right: 12px;
  font-size: 16px;
  margin: 10px;
}
</style>
