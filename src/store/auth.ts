import { useLS } from "@/composables/common/useLS";
import { defineStore } from "pinia";
import { ref } from 'vue';
import { useRouter } from "vue-router";


export type UserData = {
    email: string,
    accessToken: string,
    userId: string,
    refreshToken: string,
    expiresIn: number
}
export const useAuthStore = defineStore('auth', () => {

    const userData = ref<UserData | null>(null)
    const {set, remove} = useLS()
    const router = useRouter()

    const setUserData = async (data: UserData) => {
      
        userData.value = data
        set('user_creds', {
            refreshToken: userData.value.refreshToken,
            accessToken: userData.value.accessToken,
            userId: userData.value.userId,
            expiresIn: userData.value.expiresIn
        }) 
        await router.replace({name: 'home'})

        
    }

    const destroyUserData = async () => {
        userData.value = null
        remove('user_creds')

        await router.replace({name: 'signin'})
    }
    return {
        setUserData,
        destroyUserData,
        userData
    }


})