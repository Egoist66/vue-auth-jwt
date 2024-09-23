import { useLS } from "@/composables/common/useLS";
import router from "@/router";
import { useAuthStore } from "@/store/auth";
import axios from "axios";
import { storeToRefs } from "pinia";
import type { App } from "vue";




export const axiosAuthInst = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/'
})

// export const axiosCarsInst = axios.create({
//     baseURL: 'https://vue-auth-jwt-default-rtdb.europe-west1.firebasedatabase.app/',
//     headers: {
//         Authorization: `Bearer ${useLS().get('user_creds')?.accessToken}`
//     }
// })

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY

export const globalApiIntercerptor = {
/**
 * Installs the global interceptor for axios. This interceptor is used to
 * append the `auth` parameter to all requests, which contains the access token
 * from the user's session.
 *
 * @param {App} app - The Vue application instance.
 * @return {void} No return value.
 */
  install: (app: App) => {

    
    const { get, exist, remove } = useLS();
    let params = new URLSearchParams();
    const { userData } = storeToRefs(useAuthStore());
    const { setUserData, destroyUserData } = useAuthStore();

    axios.interceptors.request.use(async (config) => {
      if (
        !config.url?.includes("signInWithPassword") &&
        !config.url?.includes("signUp")
      ) {
        if (userData.value) {
          params.append("auth", userData.value.accessToken);
        }

        config.params = params;
      }
      return config;
    });

    axios.interceptors.response.use((response) => {
        return response

    }, async (error) => {
        const originRequest = error.config

        if(error.response.status === 401 && !originRequest._retry){

            originRequest._retry = true
            try {
                const {data} = await axios.post(`https://securetoken.googleapis.com/v1/token?key=${apiKey}`, {
                    grant_type: 'refresh_token',
                    refresh_token: get('user_creds')?.refreshToken
                })

                setUserData(data)
            }
            catch (e) {
                console.log(e)

                remove('user_creds')
                destroyUserData()
                await router.replace({name: 'signin'})
            }
        }

        
    })
  },
};
