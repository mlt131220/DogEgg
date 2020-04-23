<template>
  <div style="height: 100%">
    <el-row type="flex">
      <el-col class="hidden-sm-and-down" :span="asideIsCollapse ? 1 : 3">
        <Aside></Aside>
      </el-col>
      <el-col :span="screenWidth > 991 ? (asideIsCollapse ? 23 : 21) : 24">
        <div class="container">
          <div class="header">
            <Header v-if="screenWidth > 991"></Header>
            <Aside v-else></Aside>
          </div>
          <div class="main">
            <router-view></router-view>
          </div>
          <div class="footer">
            © 2020
            <a href="#"><strong>狗蛋是只喵</strong> </a>
            design by
            <a href="https://github.com/mlt131220" target="_blank">二三</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import Aside from './Aside'
  import Header from './Header'

  export default {
    name: 'Admin',
    data() {
      return {}
    },
    components:{Aside,Header},
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

<style scoped>
  .el-row, .el-col, .container {
    height: 100%;
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

  .footer{
    color: #373e4a;
    font-size: 12px;
    margin-left: 30px;
  }
  .footer a{
    color: #373e4a;
    text-decoration: none;
  }
</style>
