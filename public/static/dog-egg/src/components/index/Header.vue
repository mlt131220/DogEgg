<template>
  <div>
    <i :class="asideIsCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'" @click="asideAction"></i>

    <a href="https://github.com/mlt131220/DogEgg" target="_blank">
      <img width="149" height="149"
           src="../../assets/fork_github.png"
           alt="Fork me on GitHub"
           style="position: fixed;bottom: 0;right: 0;"
           v-if="screenWidth > 991">
    </a>

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
</style>
