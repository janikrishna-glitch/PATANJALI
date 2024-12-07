import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ThankYou.css';  // Add CSS for the emoji animation

const ThankYouPage = () => {
  const navigate = useNavigate();  

  return (
    <div className="thank-you-page">
      <div className="thank-you-content">
        <h1>Thank You!</h1>
        <p>Your payment was successful.</p>

        {/* Celebration emoji with green glow animation */}
        <div className="thank-you-emoji">
          🎉🎉🎉
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="thank-you-button"
        style={{
          backgroundColor: '#fff',
          color: '#000',
          padding: '15px 20px',
          fontSize: '1.5rem',
          fontWeight: 'bolder',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default ThankYouPage;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';  
// import './ThankYou.css';  

// const ThankYouPage = () => {
//   const navigate = useNavigate();  

//   return (
//     <div className="thank-you-page">
//       <div className="thank-you-content">
//         <h1>Thank You!</h1>
//         <p>Your payment was successful.</p>
//         <div className="thank-you-animation"></div>
//       </div>

//       <button
//         onClick={() => navigate('/')}
//         className="thank-you-button"
//         style={{
//           backgroundColor: '#fff',
//           color: '#000',
//           padding: '15px 20px',
//           fontSize: '1.5rem',
//           fontWeight: 'bolder',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         Continue Shopping
//       </button>
//     </div>
//   );
// };

// export default ThankYouPage; 