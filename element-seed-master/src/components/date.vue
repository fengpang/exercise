<!--首页空气质量日历-->
<template>
  <div class="panel">
    <!-- <div style="color: #3FC7FA">空气质量日历</div> -->
    <div class="dateBox">
      <!-- <div class="day_t">
        <div class="description">
          <span style="border-left:3px solid #00E400">1天</span><span>优</span>
        </div>
        <div class="description">
          <span style="border-left:3px solid #FFFF00">1天</span><span>良</span>
        </div>
        <div class="description">
          <span style="border-left:3px solid #FF7E00">1天</span><span>轻度</span>
        </div>
        <div class="description">
          <span style="border-left:3px solid #FF0000">1天</span><span>中度</span>
        </div>
        <div class="description">
          <span style="border-left:3px solid #99004C">1天</span><span>重度</span>
        </div>
        <div class="description">
          <span style="border-left:3px solid #7E0023">1天</span><span>严重</span>
        </div>
      </div> -->
      <div class="date_t">
        <div class="t_header">
          <span class="left" @click="subMonth(date)"><img src="../assets/空气日历_Arrow left.png"></span>
          <span class="center">{{ nows }}</span>
          <span class="right" @click="addMonth(date)"><img src="../assets/空气日历_Arrow right.png"></span>
        </div>
        <div class="t_body">
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
          <span>日</span>
        </div>
        <div class="dataBox">
          <div class="time_data" v-for="(item, index) in rows" :key="index + 1">
            <div><span>{{ days[index * 7] }}</span></div>
            <div><span>{{ days[index * 7 + 1] }}</span></div>
            <div><span>{{ days[index * 7 + 2] }}</span></div>
            <div><span>{{ days[index * 7 + 3] }}</span></div>
            <div><span>{{ days[index * 7 + 4] }}</span></div>
            <div><span>{{ days[index * 7 + 5] }}</span></div>
            <div><span>{{ days[index * 7 + 6] }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  // import { MoreService } from '../../../services/index'
  export default{
    data () {
      return {
        nows: '',
        description: [],
        aqiArr: [],
        aqiValue: [],
        days: [],
        rows: [],
        aqiData: [
          {id: 1, aq: 1},
          {id: 2, aq: 1},
          {id: 3, aq: 1},
          {id: 4, aq: 1},
          {id: 5, aq: 1},
          {id: 6, aq: 1},
          {id: 7, aq: 1},
          {id: 8, aq: 1},
          {id: 9, aq: 1},
          {id: 10, aq: 1},
          {id: 11, aq: 1},
          {id: 12, aq: 1},
          {id: 13, aq: 1},
          {id: 14, aq: 1},
          {id: 15, aq: 1},
          {id: 16, aq: 1},
          {id: 17, aq: 1},
          {id: 19, aq: 1},
          {id: 20, aq: 1},
          {id: 21, aq: 2},
          {id: 22, aq: 3},
          {id: 23, aq: 4},
          {id: 24, aq: 7},
          {id: 25, aq: 6},
          {id: 26, aq: 5}
        ]
      }
    },
    das: [],
    created () {
      this.date = new Date()
      this.nows = moment(this.date).format('YYYY年MM月')
      this.getData(this.date)
    },
    mounted () {

    },
    methods: {
      getData (time) {
        let date = new Date(time)
        let temp1 = new Date(time)
        let temp2 = new Date(time)
        let temp3 = new Date(time)
        temp1.setDate(1)
        console.log(date, temp1, temp2, temp3)
        let firstBlanks = this.getfirstBlanks(temp2)
        this.getDays(temp3, firstBlanks) // 获取天数
        // 计算日历行数
        this.rows.length = Number.parseInt(this.days.length % 7 === 0 ? this.days.length / 7 : this.days.length / 7 + 1)
      },
      // 获取天数
      getDays (date, len) {
        this.aqiArr = []
        this.days = [] // 每次点击前后按钮进入方法天数，数组清空
        let month = date.getMonth()
        date.setMonth(month + 1)
        date.setDate(0)
        let length = date.getDate()
        for (let i = 0; i < len - 1; i++) {
          this.days.push(' ')
          this.aqiArr.push('')
        }
        console.log(this.aqiArr)
        for (let i = 0; i < length; i++) {
          this.days.push(i + 1)
        }
      },
      // 后一天按钮方法
      addMonth (date) {
        let date1 = moment(date).add(1, 'months')
        this.date = new Date(date1)
        this.nows = moment(this.date).format('YYYY年MM月')
        this.getData(date1) // 调用获取日历数据方法
      },
      // 前一天按钮方法
      subMonth (date) {
        let date1 = moment(date).subtract(1, 'months')
        this.date = new Date(date1)
        this.nows = moment(this.date).format('YYYY年MM月')
        this.getData(date1) // 调用获取日历数据方法
      },
      // 获取
      getfirstBlanks (date) {
        let firstBlanks
        date.setDate(1)
        let firstDay = date.getDay()
        if (firstDay === 0) {
          firstBlanks = 7
        } else if (firstDay === 1) {
          firstBlanks = 1
        } else if (firstDay === 2) {
          firstBlanks = 2
        } else if (firstDay === 3) {
          firstBlanks = 3
        } else if (firstDay === 4) {
          firstBlanks = 4
        } else if (firstDay === 5) {
          firstBlanks = 5
        } else if (firstDay === 6) {
          firstBlanks = 6
        }
        return firstBlanks
      }
    }
  }
</script>
<style lang="less" scoped>
  .panel {
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
    padding: 12px 10px 15px 10px;
    background-color: rgba(0, 0, 0, 0.2);
    .dateBox {
      overflow: hidden;
      width: 100%;
      height: 280px;
      padding-top: 10px;
      .day_t {
        float: left;
        width: 20%;
        height: 90%;
        box-sizing: border-box;
        border-right: 1px solid rgb(0, 50, 134);
        .description {
          margin-bottom: 20px;
        }
        .description span:first-child {
          font-size: 18px;
          color: #fff;
          padding: 0 5% 0 10%;
        }
        .description span:last-child {
          font-size: 12px;
          color: #59A4CB;
        }
      }
      .date_t {
        float: left;
        width: 80%;
        box-sizing: border-box;
        height: 100%;
        padding: 0px 10px;
        .dataBox {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          font-size: 10px;
          padding: 0px 5px;
          .time_data {
            overflow: hidden;
            div {
              float: left;
              width: 14.28%;
              height: 32px;
              overflow: hidden;
              & > span {
                font-size: 10px;
                font-family: '微软雅黑';
                display: block;
                float: left;
                padding-left: 5px;
                text-align: left;
                width: 58%;
                margin-top: 8px;
                color: #fff;
              }
            }
            .api {
              float: left;
              display: block;
              height: 5px;
              width: 14%;
              border-radius: 5px;
              margin-top: 15px;
              margin-left: 3px;
            }
          }
        }
      }
    }
    .t_header {
      width: 100%;
      overflow: hidden;
      box-sizing: border-box;
      position: relative;

      span {
        display: block;
        font-size: 10px;
        color: #fff;
        padding-bottom: 15px;
      }
      .left {
        float: left;
        & > img {
          cursor: pointer;
        }
      }
      .right {
        float: right;
        & > img {
          cursor: pointer
        }
      }
      .center {
        text-align: center;
        float: left;
        width: 90px;
        position: absolute;
        left: 50%;
        margin-left: -45px;
      }
    }
    .t_body {
      width: 100%;
      overflow: hidden;
      span {
        width: 14.2857%;
        display: block;
        float: left;
        text-align: left;
        padding-left: 12px;
        padding-bottom: 15px;
        box-sizing: border-box;
        font-size: 12px;
        font-family: 微软雅黑;
        color: #00fffe;
      }
    }
    @media screen and (max-width: 1460px) {
      .t_foot {
        .description {
          span {
            font-size: 12px;
          }
        }
      }
    }
    .one {
      background-color: #00E400;
    }
    .two {
      background-color: #FFFF00;
    }
    .three {
      background-color: #FF7E00;
    }
    .four {
      background-color: #FF0000;
    }
    .five {
      background-color: #99004C;
    }
    .six {
      background-color: #7E0023;
    }
    .seven {
      background-color: #001952;
    }
  }
</style>
