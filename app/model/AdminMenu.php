<?php


namespace app\model;


use think\Model;

class AdminMenu extends Model
{
    // 设置字段信息,减少一次查询
    protected $schema = [
        'id'          => 'int',
        'pid'        => 'int',
        'menu_name'      => 'string',
        'icon'       => 'string',
        'route'       => 'string',
        'state'       => 'int',
        'create_time' => 'datetime',
        'update_time' => 'datetime'
    ];

    //只会是两层结构，故只遍历两层
    public function returnMenu(){
        $menuData = array();
        $menu = $this->where('state',1)->select()->toArray();
        $pid = $this->where('state',1)->column('pid');
        $pidArr = array_unique($pid );
        if(!$menu) return json(['state' => 0,'message'=>'菜单数据获取失败'],200);
        foreach ($menu as $value){
            if(in_array($value['id'],$pidArr)){
                $value['children'] = array();
            }
            if ($value['pid'] == 0){
                array_push($menuData,$value);
            }else{
                foreach ($menuData as $k=>$v){
                    if($v['id'] == $value['pid']){
                        array_push($menuData[$k]['children'],$value);
                    }
                }
            }
        }
        return json(['state' => 1,'data'=>$menuData],200);
    }

}