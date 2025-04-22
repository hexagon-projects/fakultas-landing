import Dashboard from '@/views/Dashboard.vue'
import Prodi from '@/views/Prodi.vue'
import ProdiDetail from '@/views/ProdiDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard,
    },
    {
      path: '/prodi',
      name: 'prodi',
      component: Prodi,
    },
    {
      path: '/prodi/detail',
      name: 'prodiDetail',
      component: ProdiDetail,
    },
  ],
})

export default router
