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