/*
* 通用网络请求
* @Youloge·RPC规范
*/
import {useConfig,useStorage}  from '@/utils'
import { NotifyPlugin,LoadingPlugin } from 'tdesign-vue-next';
export function useFetch(route,method,params={},permission=false){
  const {UKEY,APIURL,WWWURL} = useConfig();
  const {signature} = useStorage();
  return new Promise((resolve, reject) => {
    let head = { 'Content-Type': 'application/json' }
    permission ? head.signature = signature : head.ukey = UKEY;
    let body = {method:method,params:params};
    let loading = LoadingPlugin({attach:'body',fullscreen:true,delay:200});
    console.log(loading)//
    fetch((permission?WWWURL:APIURL)+'/'+route,{method:'POST',headers:head,body:JSON.stringify(body)}).then(r=>r.json()).then(({err,msg,data})=>{
      let action = {
        200:()=>{
          resolve(data)
        },
        401:()=>{
          resolve(data)
        },
        // 签名过期
        403:()=>{
          resolve(data)
        },
        404:()=>{
          resolve(data)
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
      // NotifyPlugin.warning({ title: '这是第二条通知' });
      // console.log('finally')
    })
  })
}