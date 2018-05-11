<template>
  <div class="pannel">
    <div class="header" style="margin-bottom: 0;">
      <span class="left">AQI6因子</span>
      <span class="radios">
        <input type="radio" name="time">24小时
        <input type="radio" name="time">7天
        <input type="radio" name="time">30天
      </span>
      <span class="detail fr">详情</span>
    </div>
    <chart :options="options"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: {
          color: ['#38bbc8', '#01a2f5', '#14b31c', '#f5b902', '#ff0000', '#99004c', '#7e0023'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['AQI', 'PM2.5', 'PM10', 'SO2', 'NO2', 'CO', 'O3'],
            bottom: 0,
            itemWidth: 12.5,
            itemHeight: 7,
            textStyle: {
              color: '#fff'
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: '#fff',
              align: 'left'
            },
            data: ['4.21', '4.22', '4.23', '4.24', '4.25', '4.26', '4.27'],
            axisLine: {
              lineStyle: {
                color: '#025a87'
              }
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            name: 'μg/m3',
            nameGap: 20,
            nameTextStyle: {
              color: '#567a9d'
            },
            type: 'value',
            axisLabel: {
              color: '#fff'
            },
            axisLine: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#025a87'
              }
            },
            data: [0, 20, 40, 60, 80, 100, 120]
          },
          gird: [
            { height: '10%' }
          ],
          series: [
            {
              name: 'AQI',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [99, 120, 70, 89, 60, 55, 92]
            },
            {
              name: 'PM2.5',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [112, 110, 98, 100, 80, 68, 92]
            },
            {
              name: 'PM10',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [110, 15, 99, 33, 44, 55, 50]
            },
            {
              name: 'SO2',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [51, 120, 95, 78, 99, 86, 82]
            },
            {
              name: 'NO2',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [56, 110, 92, 86, 105, 112, 120]
            },
            {
              name: 'CO',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [110, 120, 90, 80, 70, 60, 50]
            },
            {
              name: 'O3',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [1, 2, 2, 5, 3, 2, 0]
            }
          ]
        }
      }
    }
  }
</script>
