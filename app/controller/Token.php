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

    /*生成Token
     * 当前时间戳+用户名+签名+随机字符串
     * @param user 用户名
     */
    public function create_token(String $user){
        $str="qwertyuioasdfghjklzxcvbnm";
        $pw= "";
        for ( $i = 0; $i < 7; $i++ )
        {
            $pw .= substr($str, mt_rand(0, strlen($str)-1), 1);
        }
        $sign="dog-egg";
        $data = time().$user.$sign.$pw;
        return md5(sha1($data));
    }
}