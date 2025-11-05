<?php

namespace app\controller;

use support\Request;

class IndexController
{
    public function index(Request $request)
    {
        static $apikey;
        $apikey = ini('APIKEY.APIKEY');
        return view('index',['apikey'=>$apikey]); 
    }
}
