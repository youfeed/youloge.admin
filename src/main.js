import { createApp } from 'vue'
import './style.css'
import '../ui/style.css';
import App from './App.vue'
import router from './router';
import youloge from '../ui/youloge.es'
// const app = createApp(App);
// app.use(youloge);app.use(router);app.mount('#app')

createApp(App).use(youloge).use(router).mount('#app')
console.log(youloge)
