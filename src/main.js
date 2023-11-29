import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from './store'
import { setupRouter } from './router'
import { setupTDesign } from './plugins/setupTDesign'
// 配置文件 必须写在sessionStorage中
const config = {
  UKEY:'qRjE+HMLB8WcnAvdcon5Lx2BSGid7OdQUd5ozRV8QHj4sgP91+Y6xMfhrHZbONGpLErJGMZFZ8GAcEwINSE4VjwdEvna0DwHUJ3zzQNFlQg8s8nhqo4/I3y00q31eYi4',
  APIURL:"https://api.youloge.com",
  VIPURL:"https://vip.youloge.com",
  WWWURL:"https://www.youloge.com",
}
sessionStorage.setItem('config',JSON.stringify(config))
// 
const setup = async()=>{
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  setupTDesign(app)
  app.mount('#app')
}
setup();
 