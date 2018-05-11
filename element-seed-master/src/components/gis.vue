<template>
  <div class="pannel">
    <div class="header" style="margin-bottom: 0;">
      <span class="tab tab-left" :class="{active: tab }" @click="tab = true">实时</span>
      <span class="tab" :class="{active: !tab}" @click="tab = false">日</span>
      <span class="radios">
        <input type="radio" name="time">主城
        <input type="radio" name="time">全市
        <input type="radio" name="time">周边
      </span>
      <span class="detail fr">渲染</span>
    </div>
    <ul class="bar">
      <li v-for="(item, index) in data"
          :key="index"
          @click="active(item.name)"
          :class="{active: isActive === item.name}"
          class="bar-item">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        isActive: 'AQI',
        data: [
          {name: 'AQI'},
          {name: 'PM2.5'},
          {name: 'PM10'},
          {name: 'SO2'},
          {name: 'NO2'},
          {name: 'CO'},
          {name: 'O3'}
        ],
        tab: true
      }
    },
    methods: {
      active (name) {
        this.isActive = name
      }
    }
  }
</script>

<style lang='less'>
  .bar {
    background: #0eb6ce0f;
    float: right;
    margin-top: 2rem;
    opacity: 0;
    transition: all .3s ease-out;
    &:hover {
      opacity: 1;
      cursor: pointer;
    }
    .bar-item {
      padding: 1rem;
      transition: all .3s ease-out;
    }
  }
  .active {
    background:rgba(8, 54, 90, 0.2);
  }
</style>
