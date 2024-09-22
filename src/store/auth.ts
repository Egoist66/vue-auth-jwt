import { useLS } from "@/composables/common/useLS";
import { defineStore } from "pinia";
import { ref } from 'vue';
import { useRouter } from "vue-router";


type UserData = {
    email: string,
    accessToken: string,
    userId: string,
    refreshToken: string,
    expiresIn: number
}
export const useAuthStore = defineStore('auth', () => {

    const userData = ref<UserData | null>(null)
    const {set} = useLS()
    const router = useRouter()

    const setUserData = async (data: UserData) => {
      
        userData.value = data
        set('user_id', userData.value.userId)
        set('access_token', userData.value.accessToken)

        await router.replace({name: 'home'})

        
    }


    return {
        setUserData,
        userData
    }


})