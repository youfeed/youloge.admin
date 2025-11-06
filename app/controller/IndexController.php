<?php

namespace app\controller;

use Exception;
use support\Request;

class IndexController
{
    protected $noNeedRight = []; // 不验证组织来源
    protected $noNeedLogin = []; // 不验证登录信息
    public function index(Request $request)
    {
        static $apikey;
        $apikey = ini('APIKEY.APIKEY');
        return view('index',['apikey'=>$apikey]); 
    }
}
