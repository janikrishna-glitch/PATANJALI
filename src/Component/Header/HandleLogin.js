
import React from 'react';
import PaymentPage from './PaymentPage'; // Adjust the import path if needed

const App = () => {
  const handleLogin = (email, password) => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
    // Implement your login logic here (API call, Redux action, etc.)
  };

  return (
    <div>
      <h1>Welcome to My App</h1>
      <PaymentPage onLogin={handleLogin} />
    </div>
  );
};

export default App;
