<template>
  <div class="content">
    <div class="left">
      <gauge/>
      <aqi/>
    </div>
    <div class="middle">
      <gis/>
      <pie/>
    </div>
    <div class="right">
      <RankingTable :data="tables"/>
      <date/>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'
  import gauge from '../components/gauge'
  import RankingTable from '../components/rankingTable'
  import aqi from '../components/aqi'
  import date from '../components/date'
  import pie from '../components/pie'
  import gis from '../components/gis'
  @Component({
    components: { RankingTable, date, gauge, aqi, pie, gis }
  })
  export default class Home extends Vue {
    tables = [
      {id: 1, num: 100, name: '重庆', guokong: 12},
      {id: 2, num: 100, name: '张家界', guokong: 45},
      {id: 3, num: 100, name: '广安', guokong: 87},
      {id: 4, num: 100, name: '乐山', guokong: 67},
      {id: 5, num: 100, name: '成都', guokong: 121},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 6, num: 100, name: '遂宁', guokong: 231},
      {id: 7, num: 100, name: '西昌', guokong: 43}
      ]
  }
</script>
<style>
  .el-progress {
    position: relative;
    line-height: 1.5;
  }
  .el-progress-bar__outer{
    background-color: rgb(0,29,78);
  }
  .el-progress-bar{
    padding-right:0px;
  }
</style>
<style scoped>
  .content {
    width: 98%;
    margin: 0 1%;
  }
  .left {
    width: 30%;
    float: left;
    margin-right: 1%;
  }
  .middle {
    width: 36%;
    float: left;
    height: 800px;
    margin-right: 1%;
  }
  .right {
    width: 30%;
    float: left;
  }

</style>
