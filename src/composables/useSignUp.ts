import { dbConnect } from "@/database/db-connect"
import { ref } from "vue"

export const useSignUp = () => {
    const email = ref<string>('')
    const password = ref<string>('')


    const signup = async () => {
        console.log('test');
    }


    return {
        email,
        password,
        signup
    }
}