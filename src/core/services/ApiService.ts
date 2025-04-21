// ApiService.ts
import axios from "axios";
import type { AxiosError, AxiosResponse } from "axios";
import JwtService, { destroyToken, destroyExpDt } from "@/services/JwtService";
import router from "@/router";
import Swal from "sweetalert2";

axios.defaults.baseURL = import.meta.env.VITE_APP_BE_URL;

// Setup once
axios.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      destroyToken();
      destroyExpDt();
      router.push({ name: "sign-in" });
      Swal.fire({
        title: "Session Ended",
        text: "Session Ended, please relogin.",
        icon: "error",
        confirmButtonText: "OK",
        customClass: {
          confirmButton: "btn fw-semibold btn-light-danger",
        },
      });
    }
    return Promise.reject(error);
  }
);

const ApiService = {
  setHeader() {
    axios.defaults.headers.common["Authorization"] = `Bearer ${JwtService.getToken()}`;
    axios.defaults.headers.common["Accept"] = "application/json";
    axios.defaults.headers.common["Content-Type"] = "application/json";
  },

  get(resource: string, slug = "") {
    return axios.get(`${resource}/${slug}`);
  },

  query(resource: string, params: any) {
    return axios.get(resource, params);
  },

  post(resource: string, params: any) {
    return axios.post(resource, params);
  },

  update(resource: string, slug: string, params: any) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource: string, params: any) {
    return axios.put(resource, params);
  },

  delete(resource: string) {
    return axios.delete(resource);
  },
};

export default ApiService;
