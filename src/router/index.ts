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
      component: () => import('@/layouts/DefaultLayout.vue'),
      // meta: {
      //   middleware: "auth",
      // },
      children: [
        {
          path: "/",
          name: "beranda",
          component: () => import("@/views/beranda/Beranda.vue"),
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
          component: () => import("@/views/testimoni/Testimoni.vue"),
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
          component: () => import("@/views/fasilitas/Fasilitas.vue"),
          meta: {
            pageTitle: "Fasilitas",
          },
        },
        {
          path: "/prestasi",
          name: "prestasi",
          component: () => import("@/views/prestasi/Prestasi.vue"),
          meta: {
            pageTitle: "Prestasi",
          },
        },
      ]
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
})

router.beforeEach((to, from, next) => {
  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

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
