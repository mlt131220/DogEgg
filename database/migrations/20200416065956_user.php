<?php

use think\migration\Migrator;
use think\migration\db\Column;

class User extends Migrator
{
    public function change()
    {
        $table = $this->table('users');
        $table -> addColumn('username','string',array('limit'=>11,'default'=>'','comment'=>'用户名'))
            ->addColumn('password', 'string',array('limit'  =>  33,'default'=>'','comment'=>'用户密码'))
            ->addColumn('last_login_time', 'timestamp',array('comment'=>'最后登录时间'))
            ->addColumn('token', 'string',array('limit' => 225,'default'=>'','comment'=>'token'))
            ->addColumn('token_timeout', 'integer',array('limit'  =>  11,'default'=>0,'comment'=>'token过期时间戳'))
            ->addTimestamps()
            ->create();
    }
}
