

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';  

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();  

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    navigate('/ThankYouPage');  
  };

  return (
    <div className="payment-page">
      <h1>Payment Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
