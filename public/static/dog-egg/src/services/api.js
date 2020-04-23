import ajax from './http';

const api = {
  //登录
  login(params){
    return ajax.post('/login',params)
  },
  //获取admin菜单列表
  getAdminMenu(){
    return ajax.get('/admin/get_menu');
  },

  // get演示
  getDemo (id, params) {
    return ajax.get(`/topic/${id}`, {
      params: params
    });
  }
}

export default api;
