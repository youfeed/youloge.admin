<?php
/**
 * Here is your custom functions.
 */
// 安全BASE64
if(!function_exists('safe_base64_encode')){
  function safe_base64_encode($data){
    return str_replace(['+','/','='],['-','_',''],base64_encode($data));
  }
}
if(!function_exists('safe_base64_decode')){
  function safe_base64_decode($data){
    return base64_decode(str_replace(['-','_'],['+','/'],$data));
  }
}
/**
 * 网络请求封装
 * $http = new Workerman\Http\Client();
 */
if(!function_exists('onRequest')){
  function onRequest($data){
    return base64_decode(str_replace(['-','_'],['+','/'],$data));
  }
}
/**
 * VIP 接口封装
 */
if(!function_exists('vipRequest')){
  function vipRequest($routed,$params=[],$access_token=''){
    $http = new Workerman\Http\Client();
    $Organization = ini('APIKEY.APIKEY');
    $Authorization = $access_token;
    $response = $http->request("https://vip.youloge.com/$routed", [
        'method' => 'POST',
        'version' => '1.1',
        'headers' => [
            'Connection' => 'keep-alive',
            'Organization'=>$Organization,
            'Authorization'=>$Authorization,
        ],
        'data' => $params,
    ]);
    $raw = (string)$response->getBody();
    return json_decode($raw,true) ?? $raw;
  }
}