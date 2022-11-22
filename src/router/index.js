import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path:'/',
      redirect:'login'
    },
    {
      path:'/login',
      name:'登录开放平台',
      component:()=>import('@/views/login/index.vue'),
      meta:{
        requiresAuth: false,
      }
    },
    {
      path:'/redirect',
      name:'跳转',
      component:()=>import('@/views/redirect/index.vue'),
      meta:{
        requiresAuth: false,
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/error/index.vue'),
    }
  ],
  scrollBehavior(){
    return {top:0}
  }
})


export default router