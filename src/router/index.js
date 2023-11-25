/*
* 路由规范 
* 顶级公开
* 二级私有
*/
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
const routes = [{
  path: '/',
  name: 'Youloge.Admin',
  component: Layout,
  children:[]
}];
const whitelist = ['Redirect', 'login', 'NoFind', 'Root'];
const modules = import.meta.glob(['../views/**/**.vue']);
Object.entries(modules).forEach(([path, module]) => {
  let name = path.split("../views/").join("").split(".vue").join(""),[layout] = routes;
  const route = {
    path: `/${name}`,
    // name: path.replace(/^\.\//, '').replace(/\.vue$/, ''),
    component: module,
  };
  whitelist.includes(name) ? routes.push(route) : layout.children.push(route)
  // layout.children.push(route) 
  // name.includes('/') ? 
  // routes.push(route);
})
console.log(modules,routes)
// routes
const router = createRouter({
  history:createWebHistory(),
  strict:true,
  routes:routes,
  scrollBehavior:()=>({left:0,top:0})
})

export const resetRouter = (app) => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })
}
export const setupRouter = (app) => {
  app.use(router)
}
export default router