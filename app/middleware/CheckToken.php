<?php
declare (strict_types = 1);

namespace app\middleware;

use app\model\Users;

class CheckToken
{
    /**
     * 处理请求
     *
     * @param \think\Request $request
     * @param \Closure       $next
     * @return Response
     */
    public function handle($request, \Closure $next)
    {
        $notCheck = ['/login','/token/401','/token/403']; //不经过此检测的路由
        if(!in_array($request->baseUrl(),$notCheck)){
            $auth = $request->header('Authorization'); //获取传来的token
            $user = Users::where('token',$auth)->findOrEmpty();
            if (!$user->isEmpty()) { //如果token存在，判断是否超时
                if (time() - $user->token_timeout > 0) {//token长时间未使用而过期，需重新登陆
                    return redirect('token/403');
                }
            }else{//token不存在,返回登录页面
                return redirect('token/401');
            }
        }

        return $next($request);
    }
}
