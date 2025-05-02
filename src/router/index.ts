import Agenda from '@/views/agenda/Agenda.vue'
import AgendaDetail from '@/views/agendaDetail/AgendaDetail.vue'
import Berita from '@/views/berita/Berita.vue'
import BeritaDetail from '@/views/beritaDetail/BeritaDetail.vue'
import Dashboard from '@/views/Dashboard.vue'
import Faq from '@/views/Faq/Faq.vue'
import Kegiatan from '@/views/kegiatan/Kegiatan.vue'
import Kontak from '@/views/kontak/Kontak.vue'
import Prodi from '@/views/prodi/Prodi.vue'
import ProdiDetail from '@/views/prodiDetail/ProdiDetail.vue'
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
      path: '/prodi/:slug',
      name: 'prodiDetail',
      component: ProdiDetail,
    },
    {
      path: '/berita',
      name: 'berita',
      component: Berita,
    },
    {
      path: '/berita/:slug',
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
      path: '/agenda/:slug',
      name: 'agendaDetail',
      component: AgendaDetail,
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
    },
    {
      path: '/kegiatan',
      name: 'kegiatan',
      component: Kegiatan,
    },
  ],
})

export default router
