<template>
  <div id="app">
    <el-scrollbar style="height:100%">
      <!--      断网处理-->
      <transition name="el-zoom-in-top">
        <div v-if="!network" id="network">
          <i class="el-icon-warning-outline"></i>&nbsp;
          <span style="font-size: 13px;position: relative;bottom: 1px;">哦豁，没网咯~</span>
          <el-button type="danger" size="small" style="float: right" plain @click="onRefresh">刷新</el-button>
        </div>
      </transition>

      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </el-scrollbar>
  </div>
</template>

<script>
  import store from './vuex/store';

  export default {
    name: "App",
    computed: {
      network() {
        return store.state.network;
      }
    },
    methods: {
      // 通过跳转一个空页面再返回的方式来实现刷新当前页面数据的目的
      onRefresh() {
        this.$router.replace('/refresh')
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    font-family: Arimo, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
  }

  #network {
    background: #FEF0F0;
    color: #F56C6C;
    border: 1px solid #FDE2E2;
    border-radius: 5px;
    min-width: 24%;
    height: 30px;
    line-height: 32px;
    padding: 10px 20px;
    position: fixed;
    top: 10px;
    left: 38%;
    z-index: 2;
  }

  .el-scrollbar__view {
    height: 100%;
  }


  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
