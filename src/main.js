import { createApp } from 'vue'
import {setupRouter} from './router'
import {setupStore} from './store'
import { setupElementPlus } from './plugins/elementPlus'

import './styles/index.scss'
import App from './App.vue'

const setup = async()=>{
  const app = createApp(App)
  setupRouter(app)
  setupStore(app)
  setupElementPlus(app)
  app.mount('#app')
}
setup();
 