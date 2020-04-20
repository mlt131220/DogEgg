// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import Api from './services/api';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import NProgress from 'nprogress' // nprogress插件
import 'nprogress/nprogress.css' // nprogress样式

Vue.use(ElementUI);

Vue.config.productionTip = false; //生产环境提示，这里设置成了false
Vue.prototype.$ajax = Api; // 将api挂载到vue的原型上

NProgress.configure({ showSpinner: false }) //只关闭进度环

router.beforeEach((to, from, next) =>{ //进度条开始
  NProgress.start();
  next();
})

router.afterEach(()=>{
  NProgress.done();
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
