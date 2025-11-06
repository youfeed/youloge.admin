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
                "title"=>"新闻资讯",
                "icon"=>"layui-icon-home",
                "children"=>[
                    [
                        "title"=>"新闻列表",
                        "url"=>"/article/list"
                    ],
                    [
                        "title"=>"新闻审核",
                        "url"=>"/article/review"
                    ],
                    [
                        "title"=>"审核日志",
                        "url"=>"/article/logger"
                    ]
                ]
            ],[

            ]
        ]; 
    }
}
