<?php
namespace app\middleware;

use Exception;
use ReflectionClass;
use Webman\MiddlewareInterface;
use Webman\Http\Response;
use Webman\Http\Request;
/**
 * Class Authorized
 * noNeedRight --> organization 无需权限认证的方法
 * noNeedLogin --> authorization 无需登录认证的方法
 * VIP 鉴权中间件
 */
class Authorized implements MiddlewareInterface
{
    /**
     * 标准JSONRPC standardProcess
     */
    private function standardProcess(Request $request){
        @[$empty] = $allParams = $request->all();
        // 批量接口
        if(array_is_list($allParams) && $empty){
            // 批量数量限制
            if(count($allParams) > 9) throw new Exception('Too many requests',-32602);
            $response = [];
            foreach($allParams as $item){
                try {
                    @['id'=>$id,'method'=>$method,'params'=>$params] = $item;
                    if($method == null || $params == null) throw new Exception('Method not founds',-32601);
                    // 正则解析
                    @[$className,$action] = preg_split('/[._\/]/', strtolower($method), 2) + [null, null];
                    $request->action = $action;
                    $request->controller = sprintf("app\controller\%sController",ucfirst($className));
                    // 权限验证
                    $this->needRight($request);
                    $this->needLogin($request);
                    @['controllerReflect'=>$controllerReflect,'methodReflect'=>$methodReflect] = $this->needReflect($request);
                    $instance = $controllerReflect->newInstance();
                    $request->setPost($params);
                    $result = $methodReflect->invokeArgs($instance, [$request]);
                    $response[] = [
                        'id'=>$id,
                        'result'=>$result
                    ];
                } catch (\Throwable $th) {
                    $error = [
                        'code'=>$th->getCode(),
                        'message'=>$th->getMessage(),
                    ];
                    $response[] = ['id'=>$id,'error'=>$error];
                }
            }
            return json($response);
        }
        // 单例接口 单请求不需要强制包裹在try中
        @['id'=>$id,'method'=>$method,'params'=>$params] = $allParams;
        if($method == null || $params == null) throw new Exception('Method not found',-32601);
        // 正则解析
        @[$className,$action] = preg_split('/[._\/]/', strtolower($method), 2) + [null, null];
        $request->action = $action;
        $request->controller = sprintf("app\controller\%sController",ucfirst($className));
        // 权限验证
        $this->needRight($request);
        $this->needLogin($request);
        @['controllerReflect'=>$controllerReflect,'methodReflect'=>$methodReflect] = $this->needReflect($request);
        $instance = $controllerReflect->newInstance();
        try {
            $request->setPost($params);
            $result = $methodReflect->invokeArgs($instance, [$request]);
            $response = [
                'id'=>$id,
                'result'=>$result
            ];
        } catch (\Throwable $th) {
            $error = [
                'code'=>$th->getCode(),
                'message'=>$th->getMessage(),
            ];
            $response = ['id'=>$id,'error'=>$error];
        }
        return json($response);
    }
    /**
     * 简化JSONRPC simplifyProcess
     */
    private function simplifyProcess(Request $request){
        // 权限验证
        $this->needRight($request);
        $this->needLogin($request);
        @['controllerReflect'=>$controllerReflect,'methodReflect'=>$methodReflect] = $this->needReflect($request);
        $instance = $controllerReflect->newInstance();
        // 批量请求
        @[$empty] = $allParams = $request->all();
        if(array_is_list($allParams) && $empty){
            $response = [];
            foreach($allParams as $item){
                @['id'=>$id] = $item;
                try {
                    $request->setPost($item);
                    $result = $methodReflect->invokeArgs($instance, [$request]);
                    $response[] = [
                        'id'=>$id,
                        'result'=>$result
                    ];
                } catch (\Throwable $th) {
                    $error = [
                        'code'=>$th->getCode(),
                        'message'=>$th->getMessage(),
                    ];
                    $response[] = ['id'=>null,'error'=>$error];
                }
            }
            return json($response);
        }
        // 常规请求
        try {
            @['id'=>$id] = $allParams;
            $result = $methodReflect->invokeArgs($instance, [$request]);
            $response = [
                'id'=>$id,
                'result'=>$result
            ];
        } catch (\Throwable $th) {
            $error = [
                'code'=>$th->getCode(),
                'message'=>$th->getMessage(),
            ];
            $response = ['id'=>null,'error'=>$error];
        }
        return json($response);
    }
    /**
     * 检测用户认证
     * @return methodReflect Reflect
     * @return controllerReflect Reflect
     */
    private function needLogin(Request $request){
        $action = $request->action;
        @['authorization'=>$authorization] = $request->header();
        @['noNeedLogin'=>$noNeedLogin] = $this->needReflect($request);
        // 判断是否需要登录认证
        if(in_array($action, $noNeedLogin) == false) {
            $secret = ini('APIKEY.SECRET',null);
            if($authorization == null) throw new Exception('Authorization is Null',407);
            $bin = safe_base64_decode($authorization);$iv = substr($bin,0,16);
            $two = openssl_decrypt(substr($bin,16),'AES-256-CBC',substr($secret,0,32),1,$iv);
            $one = openssl_decrypt($two,'AES-256-CBC',substr($secret,32,64),1,$iv);
            $request->author = $one;
        }
    }
    /**
     * 组织租户检测
     */
    private function needRight(Request $request){
        $action = $request->action;
        @['organization'=>$organization] = $request->header();
        @['noNeedRight'=>$noNeedRight] = $this->needReflect($request);
        if(in_array($action, $noNeedRight) == false){
            $apikey = ini('APIKEY.APIKEY');
            if($apikey == []) throw new Exception('Organization is Null',407);
            if($apikey != $organization) throw new Exception('Organization is Different',407);
            $request->apikey = $apikey;
        }
    }
    /**
     * 反射取值
     * @return controllerReflect 控制器类
     * @return methodReflect 方法类
     * @return ...DefaultProperties protected 常量
     */
    private function needReflect(Request $request){
        $action = $request->action;$controller = $request->controller;
        try {
            $controllerReflect = new ReflectionClass($controller);
            $methodReflect = $controllerReflect->getMethod($action);
            $properties = $controllerReflect->getDefaultProperties() + ['noNeedRight'=>[],'noNeedLogin'=>[]];
            return ['controllerReflect'=>$controllerReflect,'methodReflect'=>$methodReflect,...$properties];
        } catch (\Throwable $th) {
            throw new Exception('Reflect is null',408);
        }
    }
    /**
     * 错误捕获
     */
    public function process(Request $request, callable $next): Response
    {
        $path = $request->path();$method = $request->method();
        try {
            // 首页跳过
            if($path == '/' && $method == 'GET'){
                return $next($request);
            }
            // 标准JSONRPC 简易JSONRPC
            return $request->path() == '/' ? $this->standardProcess($request) : $this->simplifyProcess($request); 
        } catch (\Throwable $th) {
            $error = [
                'code'=>$th->getCode(),
                'message'=>$th->getMessage(),
            ];
            return json(['id'=>null,'error'=>$error]);
        }
    }
}