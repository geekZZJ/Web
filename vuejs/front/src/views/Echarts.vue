<!--
 * @Author: zzj
 * @Date: 2021-03-30 11:28:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-30 14:25:04
 * @Description: 
-->
<template>
  <div>
    <div id="pie" style="height:300px;width:400px"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "echarts",
  components: {},
  data() {
    return {
      pieData: [
        { value: 1, name: "提问" },
        { value: 7, name: "分享" },
        { value: 10, name: "讨论" },
        { value: 9, name: "建议" },
        { value: 2, name: "动态" },
        { value: 3, name: "公告" },
      ],
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.generatePie();
  },
  methods: {
    generatePie() {
      let myChart = echarts.init(document.getElementById("pie"));
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a}<br />{b}: {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "40%",
            data: this.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>
<style lang='scss' scoped>
</style>