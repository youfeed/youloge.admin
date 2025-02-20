/*
* 调用Youloge.Plus 扩展包
*
*/
export default function usePlus(method,params) {
    let p = useConfig('youloge');
    let hash = Math.random().toString(36).substring(2, 15);
    let div = document.createElement('div'),iframe = document.createElement('iframe');
    div.style = `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);`;
    iframe.style = `width: 360px;height: 420px;border: 0;`;
    iframe.src = `https://open.youloge.com/${method}#${hash}`;
    div.appendChild(iframe);document.body.appendChild(div);
    //
    console.log(p,111);
    window.addEventListener('message', function (event) {
        console.log(event.data);
    });

}