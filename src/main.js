import { createApp } from 'vue'
import router from './router';
import Youloge from '@UI/youloge.es'
import App from './App.vue'

import '@UI/style.css'
import './style.css'

console.log(Youloge)
const app = createApp(App);
app.use(Youloge)
app.use(router)
app.mount('#app')
