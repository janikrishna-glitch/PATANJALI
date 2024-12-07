
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCx9mZprSLGa692owWo_Xz02jMxao3nUIY",
  authDomain: "react-3-d4bf9.firebaseapp.com",
  projectId: "react-3-d4bf9",
  storageBucket: "react-3-d4bf9.appspot.com",
  messagingSenderId: "1058457516840",
  appId: "1:1058457516840:web:4582ca548379fdb4edee1d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithGoogle };

// Create signInWithGoogle function
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user; // Return the signed-in user
  } catch (error) {
    console.error('Google sign-in error:', error);
    throw error; // Propagate the error
  }
};
