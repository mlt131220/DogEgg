<?php
namespace app\controller;

use app\model\Users;
use think\facade\View;

class Index extends Common
{
    public function login(){
        if(request()->isPost()){
            $data = input('post.');
            $user = new Users();
            return $user->login($data);
        }
    }

}
