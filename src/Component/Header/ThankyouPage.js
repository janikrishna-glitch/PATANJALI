import React from 'react';
import './ThankYou.css';  

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>Your payment was successful.</p>
        <div className="thank-you-animation"></div>
      </div>
    </div>
  );
};

export default ThankYouPage;
