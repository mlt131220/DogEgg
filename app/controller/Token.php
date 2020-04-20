<?php


namespace app\controller;


class Token extends Common
{
    public function token401(){
        return json(['message'=>'您尚未未登录'],401);
    }

    public function token403(){
        return json(['message'=>'登录过期，请重新登录'],403);
    }
}