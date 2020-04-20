<?php


namespace app\model;


use think\Model;

class Users extends Model
{
    // 设置字段信息,减少一次查询
    protected $schema = [
        'id'          => 'int',
        'username'        => 'string',
        'password'      => 'string',
        'last_login_time'       => 'datetime',
        'create_time' => 'datetime',
        'update_time' => 'datetime',
    ];

    public function login($data){
        $user=$this->where('username',$data['username'])->find();
        if($user){
            if($user['password'] == md5($data['password'])){
                session('username',$user['username']);
                session('uid',$user['id']);
                return json(array(1,"登陆成功"));
            }else{
                return json(array(0,"密码错误"));
            }
        }else{
            return json(array(0,"用户不存在"));
        }
    }
}