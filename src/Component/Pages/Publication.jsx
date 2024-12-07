import React from 'react';
import { useNavigate } from 'react-router-dom';

const Publications = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: '#f9f0e0', padding: '70px', width: '100vh', borderRadius: '5px', fontFamily: 'jost',marginBottom:'80px'}}>
      
        <h2>No products found.</h2>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#2e7d32',
            marginTop:'40px',
            color: 'white',
            fontSize:'25px',
            fontFamily:'-moz-initial',
            padding: '15px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Publications;
