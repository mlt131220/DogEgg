<?php


namespace app\controller;


use app\model\AdminMenu;

class Admin extends Common
{
    public function getMenu(){
        $menu = new AdminMenu();
        return $menu->returnMenu();
    }

}