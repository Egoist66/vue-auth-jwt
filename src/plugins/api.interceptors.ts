import { useLS } from "@/composables/common/useLS";
import { useAuthStore } from "@/store/auth";
import axios from "axios";
import { storeToRefs } from "pinia";
import type { App } from "vue";



export const globalApiIntercerptor = {
    
    install: (app: App) => {

        const {userData} = storeToRefs(useAuthStore())
        return axios.interceptors.request.use(async (config) => {
            const {get, exist} = useLS();
            let params = new URLSearchParams();
        
            if(userData.value) {
                params.append('auth', userData.value.accessToken);
        
            }
        
            config.params = params
            return config
        })
    }
}