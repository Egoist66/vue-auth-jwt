import { useAuthStore } from "@/store/auth"
import axios from "axios"
import { ref } from "vue"

export const useSignUp = () => {
    const email = ref<string>('')
    const password = ref<string>('')

    const {setUserData} = useAuthStore()


    const signup = async () => {
        
        try {
            const {data} = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, {
                email: email.value,
                password: password.value,
                returnSecureToken: true
            })

        
           
            if(data.idToken){
                setUserData({email: data.email, idToken: data.idToken, refreshToken: data.refreshToken})

            }
               
            
        }
        catch(e){

            console.log(e)
        }
    }


    return {
        email,
        password,
        signup
    }
}