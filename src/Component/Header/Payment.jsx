
import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import './Payment.css';  
  import Footer from './Footer';


  const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

   
      if (cardNumber.length !== 12) {
        setError('Card number must be exactly 12 digits');
        return;
      }

     
      if (cvv.length !== 3 && cvv.length !== 4) {
        setError('CVV must be 3 or 4 digits');
        return;
      }


      const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!expiryRegex.test(expiryDate)) {
        setError('Invalid expiry date format. Use MM/YY.');
        return;
      }
    
      // Split the expiryDate into month and year
      const [month, year] = expiryDate.split('/').map(Number);
      const currentYear = new Date().getFullYear() % 100; // Get last two digits of the current year
      const currentMonth = new Date().getMonth() + 1; // Months are 0-based in JavaScript
    
      // Validate if the expiry date is in the future
      if (year < currentYear || (year === currentYear && month < currentMonth)) {
        setError('Card has expired');
        return;
      }
    
      setError('');

      

      navigate('/ThankYouPage');  
    };

    return (
      <div className="payment-page-container">
        <div className="content payment-page">
          <h1 style={{fontFamily:'inherit'}}>Payment Information</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Card Number:</label>
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Enter your card number"
                required style={{background:'#f7971d' ,color:'#fff',fontWeight:'bold'}}
              />
            </div>
            <div className="form-group">
              <label>Expiry Date:</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="MM/YY"
                required
                style={{background:'#4caf50' ,color:'#fff',fontWeight:'bold'}}
              />
            </div>
            <div className="form-group">
              <label>CVV:</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="CVV"
                required
                style={{background:'#007bff' ,color:'#fff',fontWeight:'bold'}}
              />
            </div>

            {/* Display error message if validation fails */}
            {error && <h1 style={{ color: 'maroon', fontSize: '1.2rem' }}>{error}</h1>}

            <button type="submit" className="submit-button" style={{background:'#db4437'}}>Submit Payment</button>
          </form>
        </div>


        <button
            onClick={() => navigate('/')}
            style={{
              backgroundColor: '#fff',
              color: 'white',
              padding: '15px 20px',
              fontSize:'1.5rem',
            fontWeight:'bolder',
  color:'#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Continue Shopping
          </button>

        {/* Footer goes below */}
        <div className='footer' >
        <Footer />
        </div>


        
      </div>
    );
  };

  export default PaymentPage;