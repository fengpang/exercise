<template>
  <div class="manage_page fillcontain">
    <el-container style="height: 100%;">
      <el-header class="headers" style="height: 70px">
        <el-row :gutter="20" style="margin: 0px">
          <el-col :span="16">
            <div class="grid-content bg-purple" style="color: rgba(0,0,0,0)">
              重庆环保数据综合展示平台
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple" style="padding-top: 10px">
              <div class="grid-content bg-purple" style="float: left;margin-right: 20px;margin-left: 30px">
                <router-link to="/home" style="color: white;">首页</router-link>
              </div>
              <div class="grid-content bg-purple" style="float: left;margin-right: 20px">
                <router-link to="/more" style="color: white;">大气</router-link>
              </div>
              <div class="grid-content bg-purple" style="float: left;">
                <router-link to="/" style="color: white;">退出</router-link>
              </div>
              <div style="clear: both"/>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main style="height: 100%;overflow: auto; padding:0px">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    computed: {
      defaultActive: function () {
        return this.$route.path.replace('/', '')
      }
    }
  }
</script>

<style lang="less" scoped>
  .headers {
    text-align: center;
    background: url("../assets/top.png") no-repeat;
    background-size: 100%;
    margin: 0;
    padding: 0;
    line-height: 70px;
  }
</style>
