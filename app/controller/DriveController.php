<?php

namespace app\controller;

use Exception;
use support\Request;

class DriveController
{
    protected $noNeedRight = []; // 不验证组织来源
    protected $noNeedLogin = []; // 不验证登录信息
    /**
     * 获取文章列表- 任意状态
     * 以开发者身份
     */
    public function list(Request $request)
    {
        @['access'=>$access_token] = $author = $request->author;
        @['err'=>$err,'msg'=>$msg] = $params = useValidate($request->all(),[
            'cursor'=>'string',
            'limit'=>'int:10|max:20',
            'status'=>'int:1'
        ]);if($err) throw new Exception($msg,$err);
        // 远程请求
        @[
            'error'=>['code'=>$code,'message'=>$message],
            'result'=>$result
        ] = vipRequest('drive/list',$params,$access_token);
        if($code) throw new Exception($message,$code);
        return $result; 
    }
        /**
     * 获取文章列表- 任意状态
     * 以开发者身份
     */
    public function info(Request $request)
    {
        @['access'=>$access_token] = $author = $request->author;
        @['err'=>$err,'msg'=>$msg,'uuid'=>$uuid] = $params = useValidate($request->all(),[
            'uuid'=>'required|int'
        ]);if($err) throw new Exception($msg,$err);
        // 远程请求
        @[
            'error'=>['code'=>$code,'message'=>$message],
            'result'=>$result
        ] = vipRequest('drive/info',$params,$access_token);
        if($code) throw new Exception($message,$code);
        return $result; 
    }
}

