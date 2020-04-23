<?php

use think\migration\Migrator;
use think\migration\db\Column;

class AdminMenu extends Migrator
{
    /**
     * Change Method.
     *
     * Write your reversible migrations using this method.
     *
     * More information on writing migrations is available here:
     * http://docs.phinx.org/en/latest/migrations.html#the-abstractmigration-class
     *
     * The following commands can be used in this method and Phinx will
     * automatically reverse them when rolling back:
     *
     *    createTable
     *    renameTable
     *    addColumn
     *    renameColumn
     *    addIndex
     *    addForeignKey
     *
     * Remember to call "create()" or "update()" and NOT "save()" when working
     * with the Table class.
     */
    public function change()
    {
        $table = $this->table('admin_menu');
        $table->addColumn('pid','integer')
            ->addColumn('menu_name','string',array('limit'  =>  20,'default'=>'','comment'=>'菜单名称'))
            ->addColumn('icon','string',array('limit'  =>  20,'default'=>'','comment'=>'图标'))
            ->addColumn('route','string',array('limit'  =>  100,'default'=>'','comment'=>'路由'))
            ->addColumn('state','integer',array('limit'  =>  0,'default'=>1,'comment'=>'状态'))
            ->addTimestamps()
            ->create();
    }
}
