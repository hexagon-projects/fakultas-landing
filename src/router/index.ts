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
      ]
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
