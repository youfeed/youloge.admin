import yForm from './from.vue'
yForm.install = app =>{
  app.component(yForm.name,yForm)
}
export default yForm
