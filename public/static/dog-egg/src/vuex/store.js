import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  network:true,
  token:localStorage.getItem('token') ? localStorage.getItem('token'):'',
  asideIsCollapse:false,
  screenWidth: document.documentElement.clientWidth,

}

const mutations = {
  toggleAside(state){
    state.asideIsCollapse = !state.asideIsCollapse;
  },
  isCollapseBool(state,bool){
    state.asideIsCollapse =bool;
  },
  setScreenWidth(state,sWidth){
    state.screenWidth = sWidth;
  },
  changeNetwork(state,bool){
    state.network =bool;
  },
  setToken(state, value) { // 设置存储token
    state.token = value;
    localStorage.setItem('token', value);
  },
  removeStorage(state, value){  // 删除token
    state.token = "";
    localStorage.removeItem('token');
  }
}

const getters = {}

const actions = {
  asideAction({commit}){
    commit('toggleAside');
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
