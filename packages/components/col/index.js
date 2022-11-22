import yCol from './col.vue'
yCol.install = app =>{
  app.component(yCol.name,yCol)
}
export default yCol