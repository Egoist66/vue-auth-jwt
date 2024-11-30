import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

export const useGoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const router = useRouter()


  const authViaGoogle = async () => {
    try {
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider)
      const user = result.user;
      if (user) {
        localStorage.setItem('user_id', user.uid)
        await router.replace({name: 'home'})
      }
      return user
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(error);
    }
  };

  return {
    authViaGoogle,
  }
};

