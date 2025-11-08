<?php

namespace app\controller;

use Exception;
use support\Request;
// 
class PaymentController
{
    protected $noNeedRight = []; // 不验证组织来源
    protected $noNeedLogin = ['drive']; // 不验证登录信息
    /**
     * 用户云盘支付同步回调
     */
    public function drive(Request $request)
    {
        $apikey = $request->apikey;
        @['err'=>$err,'msg'=>$msg,'signature'=>$signature] = $params = useValidate($request->all(),[
            'uuid'=>'string',
            'expire'=>'int',
            'signature'=>'string'
        ]);if($err) throw new Exception($msg,$err);
        // 解密签名
        $de = YoulogeEncrypt($signature);
        return ['des'=>$de,'signature'=>$signature]; 
    }
}
