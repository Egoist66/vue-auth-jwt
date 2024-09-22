import { useLS } from "@/composables/common/useLS";
import axios from "axios";
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
        set('user_id', data.userId)

        await router.replace({name: 'home'})

        
    }


    return {
        setUserData,
        userData
    }


})