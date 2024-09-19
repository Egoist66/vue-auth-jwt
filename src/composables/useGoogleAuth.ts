import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "vue-router";

export const useGoogleAuth = () => {
  const provider = new GoogleAuthProvider();
  const router = useRouter()


  const authViaGoogle = async () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        const user = result.user;
        return user
        
      })
      .then(async user => {
        if(user){
        
          localStorage.setItem('user_id', user.uid)
          await router.replace({name: 'home'})
          
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.log(error);
    });
  };


  return {
    authViaGoogle,
  }
};
