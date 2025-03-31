/*
* 路由规范 
* 顶级公开
* 二级私有
*/
import { createWebHistory, createRouter } from 'vue-router'
import Layout from '@/layout/index.vue'
const routes = [
  {
    path: '/',
    name: 'Youloge.Admin',
    component: Layout,
    children:[]
  },{
    path: '/:pathMatch(.*)',
    redirect: '/404',
  }
];
// 白名单路由
const whitelist = ['login', '404'];
const modules = import.meta.glob(['../views/**/**.vue']);
Object.entries(modules).forEach(([path, module]) => {
  let name = path.split("../views/").join("").split(".vue").join(""),[layout] = routes;
  const route = {
    path: `/${name.replace(/\/?index$/, '')}`,
    name: name,
    component: module,
  };
  whitelist.includes(name) ? routes.push(route) : layout.children.push(route)
})
console.log('routes',routes)
const router = createRouter({
  history:createWebHistory(),
  strict:true,
  routes:routes,
  scrollBehavior:()=>({left:0,top:0})
})
// export const
export const resetRouter = (app) => {
  router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })
}
export const setupRoute = (app) => {
  router.beforeEach((to, from, next) => {
    whitelist.includes(to.name) || useAuth() ? next() : next({ name: 'login' });
  })
  app.use(router)
}
export default router;