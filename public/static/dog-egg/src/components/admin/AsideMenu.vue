<template>
  <div>
    <template v-for="item in menuData">
      <el-submenu v-if="item.children" :index="item.route">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.menu_name}}</span>
        </template>
        <AsideMenu :menu-data="item.children"></AsideMenu>
      </el-submenu>

      <el-menu-item v-else :index="item.route">
        <i :class="item.icon"></i>
        <span slot="title">{{item.menu_name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
  export default {
    name: "AsideMenu",
    props: ['menuData'],
  }
</script>

<style>
  /* 修改水平菜单样式 */
  .el-menu--horizontal>div>.el-submenu {
    float: left;
  }

  .el-menu--horizontal>div>.el-menu-item {
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: 2px solid transparent;
  }

  .el-menu--horizontal>div>.el-submenu .el-submenu__icon-arrow {
    position: static;
    vertical-align: middle;
    margin-left: 8px;
    margin-top: -3px;
  }

  .el-menu--horizontal>div>.el-submenu .el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
  }
  /* 修改水平菜单样式End */

  /*隐藏文字*/
  .el-menu--collapse  .el-submenu__title span{
    display: none;
  }
  /*隐藏 > */
  .el-menu--collapse  .el-submenu__title .el-submenu__icon-arrow{
    display: none;
  }

  .el-menu--collapse>div>li[role="menuitem"]>div:first-child{
    padding-left:calc(50% - 9px) !important;
  }
</style>
