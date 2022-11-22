const Fetch = {
  name:'fetch',
  api:(method='',params={})=>{
    const body = {method:method,params:params}
    return new Promise((resolve, reject)=>{
      fetch('https://api.youloge.com/', { method: 'post',body: JSON.stringify(body) }).then(r=>r.json()).then(r=>{
        r.err == 0 ? resolve(r.data) :  reject(r)
      }).catch(e=>{
        reject(e)
      })
    });
  },
  vip:(method='',params={})=>{
    const head = {access:localStorage.getItem('access')|| ''}
    const body = {method:method,params:params}
    return new Promise((resolve, reject)=>{
      fetch('https://vip.youloge.com/', { method: 'post',headers:head,body: JSON.stringify(body) }).then(r=>r.json()).then(r=>{
        r.err == 0 ? resolve(r.data) :  reject(r)
      }).catch(e=>{
        reject(e)
      })
    });
  },
  ajax:(url,options={})=>{
    return new Promise((resolve, reject)=>{
      fetch(url, options).then(r=>r.json()).then(r=>{
        resolve(r)
      }).catch(e=>{
        reject(e)
      })
    });
  },
}
export default Fetch;