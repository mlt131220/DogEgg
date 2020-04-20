import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import Login from '../components/index/login'
import Refresh from '../components/refresh'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/login',
      component: Login
    },
    {
      path: '/refresh',
      component: Refresh
    },
    {
      path: '/admin',
      component: Refresh
    }
  ]
})
