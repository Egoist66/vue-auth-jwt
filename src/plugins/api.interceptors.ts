import { useLS } from "@/composables/common/useLS";
import axios from "axios";
import type { App } from "vue";

export const globalApiIntercerptor = {
    install: (app: App) => {
        return axios.interceptors.request.use(async (config) => {
            const {get, exist} = useLS();
            let params = new URLSearchParams();
        
            if(exist('access_token')) {
                params.append('auth', get('access_token'));
        
            }
        
            config.params = params
            return config
        })
    }
}