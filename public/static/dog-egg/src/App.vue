<template>
  <div style="height: 100%">
    <el-scrollbar style="height:100%">
      <el-row type="flex">
        <el-col class="hidden-sm-and-down" :span="asideIsCollapse ? 1 : 4">
          <router-view name="aside"></router-view>
        </el-col>
        <el-col :span="screenWidth > 991 ? (asideIsCollapse ? 23 : 20) : 24">
          <div class="container">
            <div class="header">
              <router-view :name="screenWidth > 991 ? 'header' : 'aside'"></router-view>
            </div>
            <div class="main">
              <router-view name="main"></router-view>
            </div>
            <div class="footer"></div>
          </div>
        </el-col>
      </el-row>
    </el-scrollbar>
  </div>
</template>

<script>
  import store from '@/vuex/store'

  export default {
    name: 'App',
    data() {
      return {}
    },
    methods: {},
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          this.$store.commit('setScreenWidth',document.documentElement.clientWidth);
          if( this.screenWidth < 992 ){
            this.$store.commit('isCollapseBool',false);
          }
        })()
      }
    },
    computed:{
      screenWidth(){
        return this.$store.state.screenWidth;
      },
      asideIsCollapse(){
        return this.$store.state.asideIsCollapse;
      }
    },
    store
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  html, body, .el-scrollbar__view, .el-row, .el-col, .container {
    height: 100%;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }

  .header, .footer {
    background-color: #fff;
    color: #979898;
    line-height: 60px;
    height: 60px;
  }

  .main {
    background-color: #F9F9F9;
    color: #333;
    text-align: center;
    line-height: 160px;
    min-height: calc(100% - 120px);
  }
</style>
