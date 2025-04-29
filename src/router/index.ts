import Berita from '@/views/Berita.vue'
import BeritaDetail from '@/views/BeritaDetail.vue'
import Dashboard from '@/views/Dashboard.vue'
import Kontak from '@/views/Kontak.vue'
import Prodi from '@/views/Prodi.vue'
import ProdiDetail from '@/views/ProdiDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Agenda from '@/views/Agenda.vue'
import AgendaDetail from '@/views/AgendaDetail.vue'
import Faq from '@/views/Faq.vue'

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
    {
      path: '/berita',
      name: 'berita',
      component: Berita,
    },
    {
      path: '/berita/detail',
      name: 'beritaDetail',
      component: BeritaDetail,
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: Kontak,
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: Agenda,
    },
    {
      path: '/agenda/agendaDetail',
      name: 'agendaDetail',
      component: AgendaDetail,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
  ],
})

export default router
