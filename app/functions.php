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
 * Youloge 加解密
 * 算法：AES-256-CBC
 */
if(!function_exists('YoulogeEncrypt')){
    function YoulogeEncrypt($array = []){
        try {
            $secret = safe_base64_decode(ini('APIKEY.SECRET'));
            $iv = openssl_random_pseudo_bytes(16);$text = json_encode($array);
            $inner_key = substr($secret,0,32);
            $outer_key = substr($secret,32,64);
            $outer = openssl_encrypt($text,'AES-256-CBC',$outer_key,1,$iv);
            $inner = openssl_encrypt($outer,'AES-256-CBC',$inner_key,1,$iv);
            return safe_base64_encode($iv.$inner);
        } catch (\Throwable $th) {
            return [ 'err'=>$th->getCode(),'msg'=>$th->getMessage(),'secret'=>$secret ];
        }
    }
}
if(!function_exists('YoulogeDecrypt')){
    function YoulogeDecrypt($string){
        try {
            $secret = safe_base64_decode(ini('APIKEY.SECRET'));
            $cipher = safe_base64_decode($string);
            $iv = substr($cipher,0,16);
            $text = substr($cipher,16);
            $inner_key = substr($secret,0,32);
            $outer_key = substr($secret,32,64);
            $outer = openssl_decrypt($text,'AES-256-CBC',$outer_key,1,$iv);
            $inner = openssl_decrypt($outer,'AES-256-CBC',$inner_key,1,$iv);
            return json_decode($inner,true) ?? ['raw'=>$inner];
        } catch (\Throwable $th) {
            return [ 'err'=>$th->getCode(),'msg'=>$th->getMessage() ];
        }
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