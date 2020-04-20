import axios from 'axios';
import {Message} from "element-ui";
import store from '@/vuex/store';
import router from '../router';

/**
 * 提示函数
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = (msg,type) => {
  Message({
    showClose: true,
    message: msg,
    type: type
  });
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, mes) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      tip(mes,'warning');
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      tip(mes,'warning');
      store.commit('removeStorage', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
    // 404请求不存在
    case 404:
      tip('请求的资源不存在','error');
      break;
    default:
      tip(error.response.data.message,'error')
  }}

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12,baseURL:'http://112.126.58.238'});

//instance.defaults.baseURL = 'http://112.126.58.238' //设置axios的默认请求地址
instance.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      if (!window.navigator.onLine) {
        store.commit('changeNetwork', false);
      } else {
        return Promise.reject(error);
      }
    }
  });

export default instance;
