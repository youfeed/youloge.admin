<?php
/**
 * 跨域中间件（Webman 兼容版）
 */
namespace app\middleware;

use Webman\MiddlewareInterface;
use Webman\Http\Response;
use Webman\Http\Request;

class AllowCross implements MiddlewareInterface
{
    // 配置允许的跨域规则（可根据需求修改）
    private $allowConfig = [
        'allow_origin' => '*', // 明确允许你的前端域名（多个可添加）
        'allow_methods' => 'GET,POST,PUT,DELETE,OPTIONS', // 明确允许的方法
        'allow_headers' => 'organization,authorization,content-type,lang', // 明确允许的头
        'allow_credentials' => false, // 允许携带 Cookie（若不需要可改为 false）
        'max_age' => 1728000 // 预检请求缓存 24 小时
    ];

    public function process(Request $request, callable $next): Response
    {
        $response = $request->method() == 'OPTIONS' ? response('') : $next($request);
        $response->withHeaders([
            'Access-Control-Allow-Credentials' => 'true',
            'Access-Control-Allow-Origin' => $request->header('origin', '*'),
            'Access-Control-Allow-Methods' => $request->header('access-control-request-method', '*'),
            'Access-Control-Allow-Headers' => $request->header('access-control-request-headers', '*'),
        ]);

        return $response;
    }

    /**
     * 统一设置跨域头
     */
    private function setCorsHeaders(Response $response, Request $request): Response
    {
        $response = $request->method() == 'OPTIONS' ? response('') : $next($request);
        $response->withHeaders([
            'Access-Control-Allow-Credentials' => 'true',
            'Access-Control-Allow-Origin' => $request->header('origin', '*'),
            'Access-Control-Allow-Methods' => $request->header('access-control-request-method', '*'),
            'Access-Control-Allow-Headers' => $request->header('access-control-request-headers', '*'),
        ]);

        return $response;
        // $config = $this->allowConfig;
        // $origin = $request->header('origin', '');

        // // 3. 处理 Origin：只允许配置中的域名，避免冲突
        // // $allowOrigin = in_array($origin, $config['allow_origin']) ? $origin : '';
        // // 若不需要携带 Cookie（allow_credentials 为 false），可改为 $allowOrigin = '*'

        // // 4. 设置跨域头（严格遵循规范）
        // return $response->withHeaders([
        //     'Access-Control-Allow-Origin' => $origin,
        //     'Access-Control-Allow-Methods' => $config['allow_methods'],
        //     'Access-Control-Allow-Headers' => $config['allow_headers'],
        //     'Access-Control-Allow-Credentials' => $config['allow_credentials'] ? 'true' : 'false',
        //     'Access-Control-Max-Age' => (string)$config['max_age'],
        //     'Vary' => 'Origin' // 告诉浏览器根据 Origin 动态返回跨域头
        // ]);
    }
}