<?php


namespace app\model;


use app\controller\Token;
use think\Model;

class Users extends Model
{
    // 设置字段信息,减少一次查询
    protected $schema = [
        'id'          => 'int',
        'username'        => 'string',
        'password'      => 'string',
        'last_login_time'       => 'datetime',
        'token'       => 'string',
        'token_timeout'       => 'int',
        'create_time' => 'datetime',
        'update_time' => 'datetime',
    ];

    public function login($data){
        $user=$this->where('username',$data['username'])->find();
        if($user){
            if($user['password'] == md5($data['password'])){
                //生成token
                $token = Token::create_token($data['username']);
                $user->token = $token;
                $user->token_timeout = time() + 604800;//有效期为1周
                $res = $user->save();
                if($res){
                    return json(['state' => 1,'message'=>'登陆成功','token'=>$token],200);
                }else{
                    return json(['state' => 0,'message'=>'系统错误，请重试！'],200);
                }
            }else{
                return json(['state' => 0,'message'=>'密码错误'],200);
            }
        }else{
            return json(['state' => 0,'message'=>'用户不存在'],200);
        }
    }
}