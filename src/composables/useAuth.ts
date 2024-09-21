import { useAuthStore } from "@/store/auth";
import axios from "axios";
import { ref } from "vue";
import { useStatuses } from "./common/useStatuses";
import { delay } from "@/utils/delay";

/**
 * A hook for handling user sign up functionality.
 *
 * @return {{ email: Ref<string>, password: Ref<string>, signup: () => Promise<void>, statuses: any }} An object containing email and password refs, a signup function, and statuses.
 */
export const useAuth = () => {
  const email = ref<string>("");
  const password = ref<string>("");

  const { setUserData } = useAuthStore();
  const { setLoading, statuses, error, setError, resetStatus, setSuccess } =
    useStatuses();

  const resetFields = () => {
    email.value = "";
    password.value = "";
  };



  const auth = async (type: 'signUp' | 'signIn') => {

    const queryType = type === 'signUp' ? 'signUp' : 'signInWithPassword';

    try {
      setError(null);
      setLoading();
      await delay(1000);

      const { data } = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${queryType}?key=${
          import.meta.env.VITE_FIREBASE_API_KEY
        }`,
        {
          email: email.value,
          password: password.value,
          returnSecureToken: true,
        }
      );

      if (data.idToken) {
        setUserData({
          email: data.email,
          accessToken: data.idToken,
          userId: data.localId,
          expiresIn: data.expiresIn,
          refreshToken: data.refreshToken,
        });
        setSuccess();
        resetFields();
      }
    } catch (e: any) {

      switch (e.response?.data?.error?.message) {
        case "EMAIL_EXISTS":
          setError("Email already exists");
          break;
        case "INVALID_PASSWORD":
          setError("Invalid password");
          break;
        case "EMAIL_NOT_FOUND":
          setError("Email not found");
          break;
        case "INVALID_LOGIN_CREDENTIALS":
          setError("Invalid login credentials");  
          break;
        default:
          setError("Something went wrong");
          break;
      }
      console.log(e);
    } 
    finally {
      await delay(1500);
      resetStatus();
    }
   
  };
  return {
    email,
    password,
    auth,
    error,
    statuses,
  };
};