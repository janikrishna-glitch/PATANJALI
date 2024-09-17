import React from 'react';
import { useNavigate } from 'react-router-dom';

const Publications = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px',fontFamily:'sans-serif' }}>
      <h3>Patanjali Publication</h3>
      <div style={{ backgroundColor: '#f9f0e0', padding: '70px',width:'auto', borderRadius: '5px',fontFamily:'jost' ,marginTop:'50px'}}>
        <h2>No products found.</h2>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#2e7d32',
            color: 'white',
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
