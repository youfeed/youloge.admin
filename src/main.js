import App from './App.vue'
import { createApp } from 'vue'
import { setupStore } from '@plugins/store'
import { setupRoute } from '@plugins/route'
import { setupTDesign } from '@plugins/setupTDesign'
// 配置文件 必须写在sessionStorage中
const config = {
  APIKEY:'8rR/lr0ugwqzUvBWGABJYRhTZnW+bDiS/1ha+mbat19zGuSX2hW8nHPkVxgaE1BguqDNiiCuSiVCvSk6bI21pqcOCJ50Mqd/9nOv9K4tNrjXx5J0HisriHHmv+2o25WQ',
  APIURL:"https://api.youloge.com",
  VIPURL:"https://vip.youloge.com",
  WWWURL:"https://www.youloge.com",
}
sessionStorage.setItem('config',JSON.stringify(config))
// 配置文件 必须写在sessionStorage中
const setup = async ()=>{
  const app = createApp(App)
  setupRoute(app)
  setupStore(app)
  setupTDesign(app)
  app.mount('#app')
};setup();
 