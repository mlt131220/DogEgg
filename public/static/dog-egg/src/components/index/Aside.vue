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
        default-active="2"
        :collapse="asideIsCollapse"
        class="el-menu-aside"
        v-if="asideMenuShow"
        :style="screenWidth < 768 ? 'position:absolute;top:60px;min-height:0;' : ''"
        background-color="#2C2E2F"
        text-color="#979898"
        active-text-color="#ffd04b">
        <AsideMenu :menu-data="menuData"></AsideMenu>
      </el-menu>
    </el-collapse-transition>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import AsideMenu from "./AsideMenu";

  export default {
    name: "Aside",
    data() {
      return {
        asideMenuShow: false,
        //模拟菜单数据
        menuData: [{
          icon: "el-icon-location",
          index: "1",
          text: "导航一",
          children: [{
            index: "1-1",
            text: "选项一",
          }, {
            icon: "el-icon-document",
            index: "1-2",
            text: "选项二",
          }, {
            index: "1-3",
            text: "选项三",
            children: [{
              index: "1-3-1",
              text: "孙子一"
            }, {
              index: "1-3-2",
              text: "孙子二"
            }, {
              icon: "el-icon-document",
              index: "1-3-3",
              text: "孙子三",
              children: [{
                icon: "el-icon-document",
                index: "1-3-3-1",
                text: "重孙"
              }]
            }]
          }, {
            index: "1-4",
            text: "选项四",
          }]
        }, {
          icon: "el-icon-menu",
          index: "2",
          text: "导航二"
        }, {
          icon: "el-icon-document",
          index: "3",
          text: "导航三"
        }, {
          icon: "el-icon-setting",
          index: "4",
          text: "导航四",
          children: [{
            icon: "el-icon-document",
            index: "4-1",
            text: "重孙"
          }]
        }]
      }
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
    mounted() {
      this.asideMenuShow = this.$store.state.screenWidth < 768 ? false : true;
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
