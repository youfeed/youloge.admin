/*
* 调用Youloge.Plus 扩展包
*
*/
export default function usePlus(method,params) {
    let config = useConfig('youloge');
    let hash = '#'+Math.random().toString(36).substring(2, 15);
    let dialog = document.createElement('dialog'),iframe = document.createElement('iframe');
    dialog.className = 'dialog';
    dialog.style = `width: 100%;height: 100%;`;
    iframe.style = `width: 100%;height: calc(100% - 10px);border: 0;`;
    iframe.src = `https://open.youloge.com/${method}${hash}`;
    dialog.appendChild(iframe);document.body.appendChild(dialog);
    //
    dialog.showModal();
    window.addEventListener('message', function ({origin,data,source}) {
        let [key] =  Object.keys(data),{method,params} = data[key] || {};
        if(method && key == hash){
            const work = {
               'oninit':()=>{
                source.postMessage({[hash]:{method:'onload',params:config}},origin);
               } 
            };work[method] ? work[method](params) : null;
            console.log(111,config,method,params);
        }
 
    });

}