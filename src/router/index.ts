import Agenda from '@/views/agenda/Agenda.vue'
import AgendaDetail from '@/views/agendaDetail/AgendaDetail.vue'
import Berita from '@/views/berita/BeritaView.vue'
import BeritaDetail from '@/views/beritaDetail/BeritaDetail.vue'
import Faq from '@/views/Faq/Faq.vue'
import Kegiatan from '@/views/kegiatan/Kegiatan.vue'
import Kontak from '@/views/kontak/KontakView.vue'
import Prodi from '@/views/prodi/ProdiView.vue'
import ProdiDetail from '@/views/prodiDetail/ProdiDetail.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ApiService from "@/core/services/ApiService";
import { destroyExpDt, destroyToken } from "@/core/services/JwtService";
import { isExpired } from '@/stores/auth';
import Swal from 'sweetalert2';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // component: () => import('@/layouts/DefaultLayout.vue'),
      // meta: {
      //   middleware: "auth",
      // },
      children: [
        {
          path: "/",
          name: "beranda",
          component: () => import("@/views/beranda/BerandaView.vue"),
          meta: {
            pageTitle: "Beranda",
          },
        },
        {
          path: "/tentang-fakultas",
          name: "tentang-fakultas",
          component: () => import("@/views/tentang-fakultas/TentangFakultas.vue"),
          meta: {
            pageTitle: "Tentang Fakultas",
          },
        },
        {
          path: "/testimoni",
          name: "testimoni",
          component: () => import("@/views/testimoni/TestimoniView.vue"),
          meta: {
            pageTitle: "Testimoni",
          },
        },
        {
          path: "/kerjasama",
          name: "kerjasama",
          component: () => import("@/views/kerjasama/Kerjasama.vue"),
          meta: {
            pageTitle: "Kerjasama",
          },
        },
        {
          path: "/riset-dan-inovasi",
          name: "riset-dan-inovasi",
          component: () => import("@/views/riset-dan-inovasi/RisetDanInovasi.vue"),
          meta: {
            pageTitle: "Riset dan Inovasi",
          },
        },
        {
          path: "/fasilitas",
          name: "fasilitas",
          component: () => import("@/views/fasilitas/FasilitasView.vue"),
          meta: {
            pageTitle: "Fasilitas",
          },
        },
        {
          path: "/prestasi",
          name: "prestasi",
          component: () => import("@/views/prestasi/PrestasiView.vue"),
          meta: {
            pageTitle: "Prestasi",
          },
        },
        {
          path: "/tenaga-pengajar",
          name: "tenaga",
          component: () => import("@/views/tenaga/Tenaga.vue"),
          meta: {
            pageTitle: "Tenaga & Pelajar",
          },
        },
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
    {
      path: '/prodi',
      name: 'prodi',
      component: Prodi,
      meta: {
        pageTitle: "Program Studi",
      },
    },
    {
      path: '/prodi/:slug',
      name: 'prodiDetail',
      component: ProdiDetail,
      meta: {
        pageTitle: "Prodi Detail",
      },
    },
    {
      path: '/berita',
      name: 'berita',
      component: Berita,
      meta: {
        pageTitle: "Berita",
      },
    },
    {
      path: '/berita/:slug',
      name: 'beritaDetail',
      component: BeritaDetail,
      meta: {
        pageTitle: "Berita Detail",
      },
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: Kontak,
      meta: {
        pageTitle: "Kontak",
      },
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: Agenda,
      meta: {
        pageTitle: "Agenda",
      },
    },
    {
      path: '/agenda/:slug',
      name: 'agendaDetail',
      component: AgendaDetail,
      meta: {
        pageTitle: "Agenda Detail",
      },
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq,
      meta: {
        pageTitle: "FAQ",
      },
    },
    {
      path: '/kegiatan',
      name: 'kegiatan',
      component: Kegiatan,
      meta: {
        pageTitle: "Kegiatan Mahasiswa",
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  // current page view title
  const baseTitle = to.meta.pageTitle
    ? `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`
    : import.meta.env.VITE_APP_NAME;

  document.title = baseTitle;

  // verify auth token before each page change
  ApiService.setHeader();
  // authStore.verifyAuth();

  // if (to.meta.Roles && !(to.meta.Roles as string[]).includes(Roles)) {
  //   return next({ path: "/dashboard" });
  // }

  // before page access check if page requires authentication
  if (to.meta.middleware == "auth") {
    // next();
    if (isExpired()) {
      destroyToken();
      destroyExpDt();

      next({ name: "sign-in" });
      Swal.fire({
        title: "Session Ended",
        text: "Session Ended, please relogin.",
        icon: "error",
        buttonsStyling: false,
        confirmButtonText: "OK",
        heightAuto: false,
        customClass: {
          confirmButton: "btn fw-semibold btn-light-danger",
        },
      });
    } else {
      next();
    }

  } else {
    next();
  }
});

export default router
