<template>
  <div id="app" class="fillcontain">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default class App extends Vue {
  }
</script>

<style lang="less">
  @import "style/common";
  .fillcontain{
    height: 100%;
    width: 100%;
  }
</style>
