import Loading from './loading.vue'
export default {
  install(app){
    app.config.globalProperties.$loading = Loading// 原型函数
  }
}