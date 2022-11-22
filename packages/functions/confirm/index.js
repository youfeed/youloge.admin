import Confirm from "./confirm.vue"

export default {
  install(app){
    app.config.globalProperties.$confirm = Confirm// 原型函数
  }
}