
/**
  * 开放接口请求
  * 
  * @description 登录拦截 401 权限拦截 407(密钥权限) 408(登录权限)
  * 
  * @param {string} method - 请求路径
  * @param {object} [params={}] - [可选]请求参数
  * @returns {Promise} 请求结果
  * @version 1.0.0
  * @since 0.0.0
  */
// import {useConfig,useStorage}  from '@/utils'
// import { NotifyPlugin,LoadingPlugin } from 'tdesign-vue-next';
// import { useRouter, useRoute } from 'vue-router'
export function apiFetch(method,params={}){
    const {APIKEY,APIURL,WWWURL} = useConfig('youloge'),{access_token} = useStorage('profile');
    return new Promise((resolve, reject) => {
      let headers = { 
        'Content-Type': 'application/json',
        'Organization':APIKEY,'Authorization': access_token
      },body = JSON.stringify(params),U = new URL(APIURL);
      U.pathname = method
      let loading = LoadingPlugin({attach:'body',fullscreen:true,delay:200});
    
      fetch(U.href,{method:'POST',headers:headers,body:body}).then(r=>r.json()).then(({err,msg,data})=>{
        let action = {
          200:()=>{
            resolve(data)
          },
          401:()=>{
            resolve(data)
          },
          // 签名过期
          407:()=>{
            reject(msg)
          },
          408:()=>{
            NotifyPlugin.warning({ title: '请求错误',content: '未知请求方法' });
            reject(msg)
          },
          500:()=>{
            resolve(data)
          }
        };
        action[err] ? action[err]() : reject(msg);
      }).catch(err=>{
        reject(err)
      }).finally(()=>{
        loading.hide()
      })
    })
  }