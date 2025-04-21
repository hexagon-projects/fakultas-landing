import { defineStore } from "pinia";
import axios from "axios";
import { getExpDt, getToken, saveExpDt } from "@/core/services/JwtService";

export const isExpired = (): boolean => {
  const exp = getExpDt();
  if (exp !== null && getToken() !== null) {
    const currentDt = new Date();
    const expDt = new Date(exp);

    // compare current date with token exp date
    if (currentDt < expDt) {
      //if the present time is smaller than exp time, it means that is not exp yet
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};

export const useAuthStore = defineStore("auth-store", {
  state: () => ({
    auth: {
      username: "0000.Baharianto",
      password: "",
    },
    isLoadingBtn: false,
  }),

  actions: {
    async onLogin(callback : any) {
      this.isLoadingBtn = true;
      const url = import.meta.env.VITE_APP_BE_URL + "/Auth/Login";
      const res = await axios.post(url, this.auth);

      if (res.status == 200 && res.data.token) {
        const expDt = res.data.expiration as string;
        saveExpDt(expDt);

        this.isLoadingBtn = false;
        return callback(res.status, res.data.token, res.statusText);
      } else {
        this.isLoadingBtn = false;
        return callback(res.status, res.data.token, res.statusText);
      }
    },
  },
});

export default { isExpired, useAuthStore };
