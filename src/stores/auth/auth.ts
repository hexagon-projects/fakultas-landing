import { computed, ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

interface UserData {
  username: string;
  fullname: string;
  shop: string;
  line: string;
  usergroup: string;
  exp: string; // Adjust based on the actual type
}
interface authUser {
  token: string;
  expiration: string;
}
interface paramLogin {
  USERNAME: string;
  PASSWORD: string;
}

export const useAuthStore = defineStore("auth", () => {
  const isLoadingState = ref(false);
  const errors = ref({});
  const isAuthenticated = ref(!!JwtService.getToken());
  const currentToken = ref(JwtService.getToken());
  const paramLogin = ref({
    USERNAME: "",
    PASSWORD: "",
  });
  const returnUrl = ref("/dashboard");

  // const userData = computed(() => {
  //   const result = {} as UserData;
  //   const label = ["username", "fullname", "shop", "line", "usergroup", "exp"]

  //   const data = currentToken.value ? getTokenData() : null;

  //   if (!data) {
  //     label.forEach((item) => {
  //       result[item] = "";
  //     });
  //     return result;
  //   }
  
  //   label.forEach((item) => {
  //     result[item] = data[item] || "";
  //   });

  //   return result;
  // })

  // const username = computed(() => {
  //   return userData.value.username;
  // })

  function getTokenData(): any {
    const token = JwtService.getToken();
    if (!token) return null;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${('00' + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  function setAuth(authUser: authUser) {
    isAuthenticated.value = true;

    errors.value = {};
    
    currentToken.value = authUser.token; 
    JwtService.saveToken(authUser.token);
    JwtService.saveExpDt(authUser.expiration);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    errors.value = [];
    JwtService.destroyToken();
  }

  function login(credentials: paramLogin) {
    isLoadingState.value = true;
    return ApiService.post("api/login/login", credentials)
      .then(({ data }) => {
        if(data.result === 200){
          const res = {
            token: data.data.token,
            expiration: data.data.expiration
          };
          setAuth(res);
          return true;
        }
        else{
          setError(data.message);
          return false;
        }
      })
      .catch(({ response }) => {
        setError(response.data.errors);
        return false;
      })
      .finally(() => {
        isLoadingState.value = false;
      });
  }

  function logout() {
    purgeAuth();
  }

  // function register(credentials: register) {
  //   return ApiService.post("register", credentials)
  //     .then(({ data }) => {
  //       setAuth(data);
  //     })
  //     .catch(({ response }) => {
  //       setError(response.data.errors);
  //     });
  // }

  // function forgotPassword(email: string) {
  //   return ApiService.post("forgot_password", email)
  //     .then(() => {
  //       setError({});
  //     })
  //     .catch(({ response }) => {
  //       setError(response.data.errors);
  //     });
  // }

  // function verifyAuth() {
  //   if (JwtService.getToken()) {
  //     ApiService.setHeader();
  //     ApiService.post("verify_token", { api_token: JwtService.getToken() })
  //     .then(({ data }) => {
  //         setAuth(data);
  //       })
  //       .catch(({ response }) => {
  //         setError(response.data.errors);
  //         purgeAuth();
  //       });
  //   } else {
  //     purgeAuth();
  //   }
  // }

  function verifyAuth(){
    const tokenData = getTokenData();
  
    if (!tokenData || !tokenData.exp) {
      purgeAuth();
      return false;
    }
  
    const currentTime = Math.floor(Date.now() / 1000);
    const isValid = currentTime < tokenData.exp;
  
    if (!isValid) {
      purgeAuth();
    }
  }
  

  return {
    errors,
    isAuthenticated,
    paramLogin,
    // userData,
    // username,
    returnUrl,
    isLoadingState,
    login,
    logout,
    // register,
    // forgotPassword,
    verifyAuth,
    getTokenData,
    // getUsername
  };
});
