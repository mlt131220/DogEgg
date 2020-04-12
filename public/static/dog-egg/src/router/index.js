import Vue from 'vue'
import Router from 'vue-router'
import Aside from '../components/Aside'
import Header from '../components/Header'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            components:{
              aside:Aside,
              header:Header
            }
        }
    ]
})
