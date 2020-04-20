import ajax from './http';

const api = {
  //登录
  login(params){
    return ajax.post('/login',params)
  },
  // get演示
  getDemo (id, params) {
    return ajax.get(`/topic/${id}`, {
      params: params
    });
  },
  test(params){
    return ajax.post('/test',params)
  },
}

export default api;
