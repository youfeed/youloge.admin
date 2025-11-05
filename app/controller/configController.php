<?php

namespace app\controller;

use Exception;
use support\Request;

class ConfigController
{
    public function menu(Request $request)
    {
        return [
            [
                "name"=>"home",
                "title"=>"主页",
                "icon"=>"layui-icon-home",
                "children"=>[
                    [
                    "title"=>"控制台",
                    "url"=>"/"
                    ],
                    [
                    "title"=>"主页一",
                    "url"=>"/home/homepage1/keyword=123"
                    ],
                    [
                    "title"=>"主页二",
                    "url"=>"/home/homepage2"
                    ]
                ]
            ]
        ]; 
    }
}
