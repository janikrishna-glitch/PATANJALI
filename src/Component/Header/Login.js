// import React, { useState } from 'react';
// import './Login.css';
// import { useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase auth
// import { auth } from './Firebess';


// const LoginPage = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loginSuccess, setLoginSuccess] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate for redirection

//   const handleLoginClick = async () => {
//     try {
//       // Attempt to sign in using Firebase auth
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
//       // Show success message after successful login
//       setLoginSuccess(true);
//       setErrorMessage('');
      
//       // Navigate to the Payment Page after successful login
//       navigate('/PaymentPage');
//     } catch (error) {
    
//       setErrorMessage('Failed to log in. Please check your email and password.');
//       setLoginSuccess(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="breadcrumb">
//         <span>Home &gt; Login</span>
//       </div>

//       <div className="login-box">
//         <h2>Login</h2>
//         {loginSuccess && <p className="success-message">You logged in successfully!</p>}
//         {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error message */}

//         <form className="login-form">
//           <input
//             type="text"
//             placeholder="Enter your email/mobile no."
//             className="input-field"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Enter your password.."
//             className="input-field"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <a href="##" className="forgot-password">
//             Forgot password?
//           </a>
//           <div className="button-group">
//             <button
//               type="button" // Change the type to "button" to avoid form submission
//               className="login-btn"
//               onClick={handleLoginClick} // Call handleLoginClick on click
//             >
//               LOGIN
//             </button>
//             <button className="register-btn">REGISTER</button>
//             <button className="otp-btn">Shop by OTP on Your Mobile</button>
//           </div>
//         </form>

//         <div className="social-login">
//           <p>Or login with</p>
//           <button className="google-btn">
//             <i className="fa fa-google"></i> Google
//           </button>
//           <button className="facebook-btn">
//             <i className="fa fa-facebook"></i> Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Login.css';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../Header/Firebase'; // Firebase configuration
import { SET_USER_EMAIL, SET_USER_DISPLAY_NAME } from '../../Redux/ActionType'; // Your Redux action type

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();


 
  const handleRegisterClick = async () => {
    if (email && password && username) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Store email and username in Redux
        dispatch({ type: 'SET_USER_EMAIL', payload: user.email });
        dispatch({ type: 'SET_USER_DISPLAY_NAME', payload: user.displayName || 'Guest' });
        
  
        alert('Registration successful! You can now log in.');
        setIsLoginMode(true); // Switch back to login mode after registration
      } catch (error) {
        setErrorMessage(error.message);
      }
    } else {
      setErrorMessage('Please fill out all fields to register.');
    }
  };
  
  // Handle login function
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: SET_USER_EMAIL, payload: user.email });
        dispatch({ type: SET_USER_DISPLAY_NAME, payload: user.displayName || 'Guest' });
        alert(`Welcome back, ${user.email}!`);
        navigate('/Payment');
      })
      .catch((error) => setErrorMessage(error.message));
  };
  
  

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User:', user); // Check if displayName is available
      dispatch({ type: 'SET_USER_EMAIL', payload: user.email });
      dispatch({ type: 'SET_USER_DISPLAY_NAME', payload: user.displayName || 'Guest' });
      alert(`Welcome, ${user.displayName || 'Guest'}!`);
      navigate('/Payment');
    } catch (error) {
      setErrorMessage('Google login failed.');
    }
  };
  

  return (
    <div className="login-container">
      <div className="breadcrumb">
        <span>Home &gt; {isLoginMode ? 'Login' : 'Register'}</span>
      </div>

      <div className="login-box">
        <h2>{isLoginMode ? 'Login' : 'Register'}</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <form className="login-form">
          {!isLoginMode && (
            <input
              type="text"
              placeholder="Enter your username"
              className="input-field"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            type="text"
            placeholder="Enter your email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {isLoginMode && (
            <a href="/" className="forgot-password">
              Forgot password?
            </a>
          )}

          <div className="button-group">
            {isLoginMode ? (
              <>
                <button
                  type="button"
                  className="login-btn"
                  onClick={() => signInWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      const user = userCredential.user;
                      dispatch({ type: SET_USER_EMAIL, payload: user.email });
                      alert(`Welcome back, ${user.email}!`);
                      navigate('/Payment');
                    })
                    .catch((error) => setErrorMessage(error.message))
                  }
                >
                  LOGIN
                </button>
                <button
                  type="button"
                  className="register-btn"
                  onClick={() => setIsLoginMode(false)}
                >
                  REGISTER
                </button>
              </>
            ) : (
              <button
                type="button"
                className="register-btn"
                onClick={handleRegisterClick}
              >
                REGISTER
              </button>
            )}
          </div>
        </form>

        {isLoginMode && (
          <div className="social-login">
            <p>Or login with</p>
            <button className="google-btn" onClick={handleGoogleLogin}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
                alt="Google Logo"
                className="logo-icon"
                style={{ width: '25px', height: '25px' }}
              />
              Google
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
