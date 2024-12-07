

// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: "AIzaSyCx9mZprSLGa692owWo_Xz02jMxao3nUIY",
//       authDomain: "react-3-d4bf9.firebaseapp.com",
//       projectId: "react-3-d4bf9",
//       storageBucket: "react-3-d4bf9.appspot.com",
//       messagingSenderId: "1058457516840",
//       appId: "1:1058457516840:web:4582ca548379fdb4edee1d",

// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Function for email and password sign-in
// export const loginWithEmailPassword = (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// };

// // Function for Google Sign-In
// export const loginWithGoogle = () => {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, provider);
// };



// src/Firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

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

export { auth, provider };
