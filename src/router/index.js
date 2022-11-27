import { createRouter, createWebHistory } from "vue-router";
// https://www.cnblogs.com/ljx20180807/p/14665505.html
const route = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'login',
      component: () => import('../views/welcome.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue'),
      meta: {
        requiresAuth: false,
      }
    }
  ],
  scrollBehavior(){
    return {top:0}
  }
})

// route.beforeEach(async (to) => {
//   try {
//       // await userStore.getUserInfo()
//       // const res: any = await appStore.getAsyncRoutes()
//       // const asyncRoutes = handleRoutes(res)
//       // asyncRoutes.forEach((item) => router.addRoute('layout', item))
//       return to.fullPath
//   } catch (error) {
//       return `/login?redirect=${to.fullPath}`
//   }
// })
// createRouteGuard(router);
export default route