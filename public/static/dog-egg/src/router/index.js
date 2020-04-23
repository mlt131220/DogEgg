import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index/index'
import Login from '../components/index/login'
import Refresh from '../components/refresh'
import Admin from "../components/admin/Admin";
import Home from "../components/admin/Home";
import NotFound from "../components/NotFound";

Vue.use(Router);

export default new Router({
  mode: 'history',
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
      name:"Admin",
      component: Admin,
      children:[
        {
          path:'/',
          component:Home
        }
      ],
      meta: {
        requireAuth: true,
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
