import axios from "axios";
import { defineStore } from "pinia";
import { ref } from 'vue';


type UserData = {
    email: string,
    idToken: string,
    refreshToken: string
}
export const useAuthStore = defineStore('auth', () => {

    const userData = ref<UserData | null>(null)

    const setUserData = async (data: UserData) => {
      
        userData.value = data

        
    }


    return {
        setUserData,
        userData
    }


})