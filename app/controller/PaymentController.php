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
        /**
         * payment 下单参数
         * payment.local 本地单号
         * payment.payer 付款对象
         * payment.payee 收款对象
         * money.amount 支付金额
         * method 调用方法 支持标准JSONRPC或简化JSONROC
         * params 调用参数 支持标准JSONRPC或简化JSONROC
         */
        @[
            'err'=>$err,'msg'=>$msg,
            'payment'=>$payment,'money'=>$money,
            'method'=>$method,'params'=>$params,
        ] = $decrypt = YoulogeDecrypt($signature);
        if($err) throw new Exception($msg,$err);
        // 简化JSONROC 发起冲单(返回实时支付结果)
        return [$method,$params]; 
        @['error'=>$error,'result'=>$result] = vipRequest($method,$params);
        // 标准JSONROC 发起冲单(返回实时支付结果)
        // $http = new \Workerman\Http\Client();
        // $Organization = ini('APIKEY.APIKEY');
        // $response = $http->request('https://vip.youloge.com', [
        //     'method' => 'POST',
        //     'version' => '1.1',
        //     'headers' => ['Connection' => 'keep-alive','Organization'=>$Organization],
        //     'data' => ['method' => $method, 'params' => $params],
        // ]);
        // @['error'=>$error,'result'=>$result] = json_decode((string)$response->getBody(),true);
        // 消费失败 
        if($error) throw new Exception($error['message'],$error['code']);
        // 冲单成功 记录日志
        return $result; 
    }
}
