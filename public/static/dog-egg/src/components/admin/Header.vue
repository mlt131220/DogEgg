<template>
  <div>
    <i :class="asideIsCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="asideAction"></i>

    <el-avatar size="medium"  shape="square">
      <img src="../../assets/avatar.jpg"/>
    </el-avatar>
  </div>
</template>

<script>
  import store from '../../vuex/store';
  import {mapMutations,mapActions} from 'vuex'

  export default {
    name: "Header",
    data() {
      return {}
    },
    methods:{
      ...mapActions(['asideAction'])
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
  .el-icon-s-unfold,.el-icon-s-fold{
    font-size: 25px;
    margin-left: 15px;
    cursor: pointer;
  }

  .el-avatar{
    position: absolute;
    top: 12px;
    right: 30px;
  }
</style>
