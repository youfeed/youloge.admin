import App from './App.vue'
import './assets/style.css'
import 'uno.css'
import 'virtual:uno.css'
import 'virtual:unocss-devtools'
import { createApp } from 'vue'
import { setupStore } from '@plugins/store'
import { setupRoute } from '@plugins/route'
// 配置文件 必须写在sessionStorage中
const config = {
  APIKEY:'BqMoCpDJFrG-YEiL5V-eRi0AqaRhn3ace-UUMM48NgAtgH14aCdnSzO8oEF2gYUl5gNtyZQRy3QQS4HZuf5rqkG6Ptz30BMXyeabHGbkfwDrKffMOIh94TzpeUxXPc-j_a-Z4u_4UGVVWFN84YKg4-O90g0LKy4-dyk8sC8r7JI',
  APIURL:"https://api.youloge.com",
  VIPURL:"https://vip.youloge.com",
  WWWURL:"https://www.youloge.com",
}
sessionStorage.setItem('youloge',JSON.stringify(config))
// 配置文件 必须写在sessionStorage中
const setup = async ()=>{
  const app = createApp(App)
  setupRoute(app)
  setupStore(app)
  app.mount('#app')
};setup();
 