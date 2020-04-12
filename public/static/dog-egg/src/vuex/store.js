import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  asideIsCollapse:false,
  screenWidth: document.documentElement.clientWidth
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
