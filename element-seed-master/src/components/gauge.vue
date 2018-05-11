<template>
  <div class="pannel">
    <div class="header">
      <span class="left">考核</span>
      <span class="detail fr">详情</span>
    </div>
    <div class="title">
      <span class="title-item">优良天数</span>
      <span class="title-item">PM2.5</span>
      <span class="title-item">重污染天数</span>
    </div>
    <div id="gauge" class="echarts"/>
    <div class="footer">
      <div>
        <span class="footer-item leavel">安全</span>
        <span class="footer-item leavel">安全</span>
      </div>
      <div>
        <span class="footer-item">同比去年上升9天</span>
        <span class="footer-item">同比去年下降3μg/m3</span>
        <span class="footer-item">同比去年下降1天</span>
      </div>
      <div>
        <span class="footer-item">按去年预期305天</span>
        <span class="footer-item">按去年预期51μg/m3</span>
        <span class="footer-item">按去年预期28天</span>
      </div>
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data () {
      return {
        chart: null
      }
    },
    methods: {
      drawGauge (id) {
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption({
          tooltip: {
            formatter: '{a} <br/>{c} {b}'
          },
          series: [
            /* 优良天数 */
            {
              name: '优良天数',
              type: 'gauge',
              center: ['17%', '55%'], // 默认全局居中
              radius: '40%',
              min: 0,
              max: 360,
              splitNumber: 10,
              axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                  width: 5,
                  color: [[0.1, '#00e01a'], [0.11, 'transparent'], [0.2, '#00e01a'], [0.21, 'transparent'], [0.3, '#00e01a'], [0.31, 'transparent'], [0.4, '#00e01a'], [0.41, 'transparent'], [0.5, '#00e01a'], [0.51, 'transparent'], [0.6, '#27d8f2'], [0.61, 'transparent'], [0.7, '#27d8f2'], [0.71, 'transparent'], [0.8, '#27d8f2'], [0.81, 'transparent'], [0.9, '#27d8f2'], [0.91, 'transparent'], [1, '#f2c927']]
                }
              },
              axisTick: { // 坐标轴小标记
                length: 0
              },
              splitLine: { // 分隔线
                length: 0
              },
              axisLabel: {
                color: '#5680AD',
                distance: 8,
                fontSize: 8
              },
              pointer: {
                width: 2
              },
              title: {
                offsetCenter: [0, '55%'],
                color: '#5680AD',
                fontSize: 9
              },
              detail: {
                fontWeight: 'bolder',
                fontSize: 18,
                offsetCenter: [0, '-30%']
              },
              data: [{value: 50, name: '天'}]
            },

            /* PM2.5 */
            {
              name: '优良天数',
              type: 'gauge',
              center: ['50%', '55%'],
              radius: '40%',
              min: 0,
              max: 60,
              splitNumber: 12,
              axisLine: {
                lineStyle: {
                  width: 5,
                  color: [[0.92, '#00e01a'], [1, '#f2c927']]
                }
              },
              axisTick: { // 坐标轴小标记
                length: 0
              },
              splitLine: { // 分隔线
                length: 0
              },
              axisLabel: {
                color: '#5680AD',
                distance: 8,
                fontSize: 8
              },
              pointer: {
                width: 2
              },
              title: {
                offsetCenter: [0, '55%'],
                color: '#5680AD',
                fontSize: 9
              },
              detail: {
                fontWeight: 'bolder',
                fontSize: 18,
                offsetCenter: [0, '-30%']
              },
              data: [{value: 42, name: 'μg/m3'}]
            },

            /* 重污染天数top */
            {
              name: '优良天数',
              type: 'gauge',
              center: ['83%', '53%'],
              radius: '35%',
              min: 10,
              max: 30,
              splitNumber: 2,
              startAngle: 135,
              endAngle: 45,
              axisLine: { // 坐标轴线
                lineStyle: {
                  width: 4,
                  color: [[1, '#27d8f2']]
                }
              },
              axisTick: { // 坐标轴小标记
                length: 0
              },
              splitLine: { // 分隔线
                length: 0
              },
              axisLabel: {
                color: '#5680AD',
                distance: 8,
                fontSize: 8
              },
              pointer: {
                width: 2,
                length: '55%'
              },
              title: {
                offsetCenter: ['-50%', '-10%'],
                color: '#5680AD',
                fontSize: 9
              },
              detail: {
                fontWeight: 'bolder',
                fontSize: 9,
                offsetCenter: [0, '-50%'],
                color: '#fff',
                formatter: (val) => {
                  return val + '天'
                }
              },
              data: [{value: 28, name: '2018'}]
            },

            /* 重污染天数bottom */
            {
              name: '优良天数',
              type: 'gauge',
              center: ['83%', '53%'],
              radius: '35%',
              min: 10,
              max: 30,
              splitNumber: 2,
              startAngle: 315,
              endAngle: 225,
              axisLine: { // 坐标轴线
                lineStyle: {
                  width: 4,
                  color: [[1, '#f2c927']]
                }
              },
              axisTick: { // 坐标轴小标记
                length: 0
              },
              splitLine: { // 分隔线
                length: 0
              },
              axisLabel: {
                color: '#5680AD',
                distance: 8,
                fontSize: 8
              },
              pointer: {
                width: 2,
                length: '50%'
              },
              title: {
                offsetCenter: ['-50%', '10%'],
                color: '#5680AD',
                fontSize: 9
              },
              detail: {
                fontWeight: 'bolder',
                fontSize: 9,
                offsetCenter: [0, '50%'],
                color: '#fff',
                formatter: (val) => {
                  return val + '天'
                }
              },
              data: [{value: 29, name: '2017'}]
            }
          ]
        })
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawGauge('gauge')
      })
    }
  }
</script>
