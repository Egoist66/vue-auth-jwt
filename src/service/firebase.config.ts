import { initializeApp } from "firebase/app";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "vue-auth-jwt.firebaseapp.com",
  projectId: "vue-auth-jwt",
  storageBucket: "vue-auth-jwt.appspot.com",
  messagingSenderId: "383892379260",
  appId: "1:383892379260:web:f297e906da6c1c6760dbf9"
};


/**
 * Initializes the Firebase application.
 *
 * @return {firebase.app.App} The initialized Firebase app instance
 */
export const initFireBaseApp = () => {
    return initializeApp(firebaseConfig);
}