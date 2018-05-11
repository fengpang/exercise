<template>
  <div class="pannel">
    <div class="header" style="margin-bottom: 0;">
      <span class="tab tab-left" :class="{active: tab }" @click="tab = true">贡献天数同比</span>
      <span class="tab" :class="{active: !tab}" @click="tab = false">PM2.5同比</span>
      <span v-if="!tags" class="radios">
        <input type="radio" name="time">月
        <input type="radio" name="time">日
      </span>
      <span class="detail fr">详情</span>
    </div>
    <chart v-if="tab" :options="pie"/>
    <chart v-else :options="line"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: true,
        // legend: [
        //   {leavel: '优', color: '#00e400'},
        //   {leavel: '良', color: '#ffff00'},
        //   {leavel: '轻度', color: '#ff7e00'},
        //   {leavel: '中度', color: '#ff0000'},
        //   {leavel: '重度', color: '#99004c'},
        //   {leavel: '严重', color: '#7e0023'}
        // ],
        line: {
          color: ['#3bcdda', '#cb27c2', '#ffba00'],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['2018', '2017', '2016'],
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
              name: '2018',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [99, 120, 70, 89, 60, 55, 92]
            },
            {
              name: '2017',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [112, 110, 98, 100, 80, 68, 92]
            },
            {
              name: '2016',
              type: 'line',
              symbol: 'circle',
              symbolSize: 5,
              data: [110, 15, 99, 33, 44, 55, 50]
            }
          ]
        },
        pie: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          title: {
            text: 2018,
            bottom: 0,
            x: 'center'
          },
          legend: {
            show: true,
            data: ['优', '良', '轻度', '中度', '重度', '严重']
          },
          color: ['#00e400', '#ffff00', '#ff7e00', '#ff0000', '#99004c', '#7e0023', '#656668'],
          series: [
            /* 第一饼 */
            {
              name: '访问来源',
              type: 'pie',
              center: ['20%', '50%'],
              radius: ['30%', '40%'],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: 'inside',
                formatter: '{c}',
                color: 'black',
                fontSize: 9
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 32, name: '优'},
                {value: 72, name: '良'},
                {value: 24, name: '轻度'}
              ]
            },
            {
              name: '装饰内环',
              type: 'pie',
              center: ['20%', '50%'],
              radius: ['27.5%', '28%'],
              silent: true,
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 0, name: '中度'},
                {value: 0, name: '重度'},
                {value: 0, name: '严重'},
                {value: 1, name: '装饰'}
              ]
            },
            {
              name: '装饰外环',
              type: 'pie',
              center: ['20%', '50%'],
              radius: ['42.5%', '43%'],
              silent: true,
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 1, name: '装饰'}
              ]
            },
            /* 第二饼 */
            {
              name: '访问来源',
              type: 'pie',
              center: ['50%', '50%'],
              radius: ['30%', '40%'],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: 'inside',
                formatter: '{c}',
                color: 'black',
                fontSize: 9
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 87, name: '优'},
                {value: 108, name: '良'},
                {value: 73, name: '轻度'},
                {value: 63, name: '中度'},
                {value: 28, name: '重度'},
                {value: 6, name: '严重'}
              ]
            },
            {
              name: '装饰内环',
              type: 'pie',
              center: ['50%', '50%'],
              radius: ['27.5%', '28%'],
              silent: true,
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 1, name: '装饰'}
              ]
            },
            {
              name: '装饰外环',
              type: 'pie',
              center: ['50%', '50%'],
              radius: ['42.5%', '43%'],
              silent: true,
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 1, name: '装饰'}
              ]
            },
            /* 第三饼 */
            {
              name: '访问来源',
              type: 'pie',
              center: ['80%', '50%'],
              radius: ['30%', '40%'],
              avoidLabelOverlap: false,
              label: {
                show: true,
                position: 'inside',
                formatter: '{c}',
                color: 'black',
                fontSize: 9
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 87, name: '优'},
                {value: 108, name: '良'},
                {value: 73, name: '轻度'},
                {value: 63, name: '中度'},
                {value: 28, name: '重度'},
                {value: 6, name: '严重'}
              ]
            },
            {
              name: '装饰内环',
              type: 'pie',
              center: ['80%', '50%'],
              radius: ['27.5%', '28%'],
              silent: true,
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 1, name: '装饰'}
              ]
            },
            {
              name: '装饰外环',
              type: 'pie',
              center: ['80%', '50%'],
              radius: ['42.5%', '43%'],
              silent: true,
              label: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 1, name: '装饰'}
              ]
            }
          ]
        }
      }
    }
  }
</script>

<style lang="less" scoped>
 .legend {
   font-size: 12px;
 }
 .icon {
   display: inline-block;
   width: 8px;
   height: 8px;
 }
</style>
