

import { GoogleLogout } from 'react-google-login';

function LogoutButton({ setUser }) {
  const onLogoutSuccess = () => {
    setUser(null); 
    console.log('Logout made successfully');
  };

  return (
    <GoogleLogout
      clientId='4neLeyiKPRTY1tVdajflskjflasjfly'
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
    />
  );
}

export default LogoutButton;
