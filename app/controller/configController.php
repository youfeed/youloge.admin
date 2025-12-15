<?php

namespace app\controller;

use Exception;
use support\Request;

class ConfigController
{
    protected $noNeedRight = []; // 不验证组织来源
    protected $noNeedLogin = []; // 不验证登录信息
    
    public function menu(Request $request)
    {
        return [
            [
                "name"=> "control",
                "title"=> "控制台",
                "icon"=> "layui-icon-auz",
                "url"=> "/"
            ],[
                "name"=>"home",
                "title"=>"审核管理",
                "icon"=>"layui-icon-home",
                "children"=>[
                    [
                        "title"=>"文章审核",
                        "url"=>"/article/list"
                    ],[
                        "title"=>"云盘审核",
                        "url"=>"/drive/review"
                    ],[
                        "title"=>"视频审核",
                        "url"=>"/video/review"
                    ],[
                        "title"=>"商品审核",
                        "url"=>"/goods/review"
                    ]
                ]
            ],[
                "name"=>"home",
                "title"=>"商城商户",
                "icon"=>"layui-icon-home",
                "children"=>[
                    [
                        "title"=>"产品套餐",
                        "url"=>"/goods/combos"
                    ],[
                        "title"=>"发货管理",
                        "url"=>"/goods/shipment"
                    ]
                ]
            ]
        ]; 
    }
}
