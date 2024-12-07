
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '4neLeyiKPRTY1tVdajflskjflasjfly';

function GoogleLoginButton({ setUser }) {
  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response.profileObj);
    setUser(response.profileObj);  // Save the user's data (like name) in state
  };

  const onFailure = (response) => {
    console.log('Login failed: res:', response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default GoogleLoginButton;
