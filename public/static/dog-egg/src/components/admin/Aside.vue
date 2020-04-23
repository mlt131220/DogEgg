<template>
  <div style="height: 100%;">
    <el-button
      circle icon="el-icon-menu"
      :class="screenWidth > 767 ? 'menu-button-hide' : 'menu-button-show'"
      @click="showMenu">
    </el-button>
    <el-collapse-transition>
      <el-menu
        :mode="(screenWidth > 991 || screenWidth < 768) ? 'vertical' : 'horizontal'"
        default-active="1"
        :collapse="asideIsCollapse"
        class="el-menu-aside"
        v-if="asideMenuShow"
        :style="screenWidth < 768 ? 'position:absolute;top:60px;min-height:0;' : ''"
        background-color="#304156"
        text-color="#AEBAC9"
        active-text-color="#409EFF"
        unique-opened
        router>
        <AsideMenu :menu-data="menuData"></AsideMenu>
      </el-menu>
    </el-collapse-transition>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import AsideMenu from "./AsideMenu";
  import {Message} from "element-ui";

  export default {
    name: "Aside",
    data() {
      return {
        asideMenuShow: false,
        //模拟菜单数据
        menuData: []
      }
    },
    mounted() {
      this.asideMenuShow = this.$store.state.screenWidth < 768 ? false : true;
      let that = this;
      this.$ajax.getAdminMenu()
        .then(res=>{
          let data = res.data;
          console.log(data)
          if(data.state == 0){
            Message({
              showClose: true,
              message: data.message,
              type: 'error'
            })
          }else{
            that.menuData = data.data;
          }
        })
        .catch(() => Message({
          showClose: true,
          message: "服务器错误，菜单获取失败！",
          type: 'error'
        }));
    },
    methods: {
      showMenu() {
        this.asideMenuShow = !this.asideMenuShow;
      }
    },
    components: {AsideMenu},
    computed: {
      screenWidth() {
        return this.$store.state.screenWidth;
      },
      asideIsCollapse() {
        return this.$store.state.asideIsCollapse;
      }
    },
    store
  }
</script>

<style scoped>
  .el-menu-aside {
    min-height: 100%;
    overflow: hidden;
    width: 100%;
  }

  .menu-button-hide {
    display: none;
  }

  .menu-button-show {
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
  }
</style>
