import { getAuth, type Auth } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";


/**
 * Establishes a connection to the Firestore database and the Firebase Authentication service.
 *
 * @return {{store: Firestore, auth: Auth}} An object containing the Firestore database and the Firebase Authentication service.
 */
export const dbConnect = (): { store: Firestore; auth: Auth; } => {
    const store = getFirestore();
    const auth = getAuth();


    return {
        store,
        auth
    }
}
