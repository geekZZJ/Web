/*
 * @Author: zzj
 * @Date: 2021-03-08 10:12:15
 * @LastEditors: zzj
 * @LastEditTime: 2021-03-08 10:53:25
 * @Description:
 */
import React from "react";
import { Card } from "antd";
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);

class Bar extends React.Component {
  componentDidMount() {
    var bar1 = echarts.init(document.getElementById("bar1"));
    bar1.setOption({
      title: {
        text: "深圳月最低生活费组成（单位:元）",
      },
      tooltip: {
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    });
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <Card title="柱形图表1">
          <div id="bar1" style={{ width: "100%", height: "400px" }}></div>
        </Card>
      </div>
    );
  }
}

export default Bar;
