// import React from 'react';
// import './AboutUs.css'; // Optional: create this file to style the page
// import { useNavigate } from 'react-router-dom';
// import Footer from './Footer';

// export default function AboutUs() {
//   const navigate = useNavigate(); // Corrected to use 'navigate'

//   return (
//     <div className="about-us-page">
//       <div className="content-container">
//         <img
//           src="https://www.patanjaliayurved.net/assets/img/babaramdev2.png"
//           alt="Baba Ramdev"
//           className="about-us-image"
//         />
//         <div className="about-us-text">
        
//           <p>Patanjaliayurved.net domain is owned by Patanjali Ayurved Limited incorporated in 2006 under Companies Act, 1956 with its registered office at D-26, Pushpanjali Bijwasan Enclave, New Delhi - 110061. Patanjaliayurved.net is the official online Patanjali store of Patanjali Ayurved Limited. Full range of best quality, trusted Patanjali products are now just a click away from your door step. We are dedicated to best service, quality products & real-time assistance. We present full product range of food, cosmetics, medicines and books at best prices.</p>
//           <p>Patanjali Ayurved Limited produces quality Herbomineral preparations. To monitor quality, the Divya Yog Mandir Trust and Patanjali Yog Peeth grow many endangered herbs on its farmland. The principles of Good Manufacturing Practices (GMP) are rigorously followed in the plant and Company prides itself on being environment friendly.</p>
//           <p>A high stress on quality, several quality circles and special quality circles and special project teams working on Total Quality Management (TQM) projects make quality a way of life in Patanjali Ayurved Limited. This enables Patanjali Ayurved Limited to produce herbomineral preparations with uniform levels of batch-to-batch consistency. This ensures that the customer gets the same high quality product regardless of where it is purchased.</p>
//           <p>The special equipment required for manufacturing of sterile products (bhasma, ghanstva, eyedrop, capsule, etc.) includes component washing machines, steam sterilizers, membrane filter machines, manufacturing vessels, blenders, liquid filling machines, powder filling machines, sealing and labelling machines, vacuum testing chambers, inspection machines, lyophilisers, pressure vessels, etc. are provided depending on the type and volume of activity.</p>    
          
//           {/* Button is placed right after the content */}
//           <button
//             onClick={() => navigate('/')} // Use 'navigate' to go back to homepage
//             style={{
//               backgroundColor: '#fff',
//               padding: '15px 20px',
//               fontSize: '1.5rem',
//               fontWeight: 'bolder',
//               color: '#000',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               marginTop: '20px', // Add some margin to separate it from the text
//             }}
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }



import React from 'react';
import './AboutUs.css'; // Styling file
import { useNavigate } from 'react-router-dom';


export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-us-page">
      <div className="content-container">
        <img
          src="https://www.patanjaliayurved.net/assets/img/babaramdev2.png"
          alt="Baba Ramdev"
          className="about-us-image"
        />
        <div className="about-us-text">
        <p>Patanjaliayurved.net domain is owned by Patanjali Ayurved Limited incorporated in 2006 under Companies Act, 1956 with its registered office at D-26, Pushpanjali Bijwasan Enclave, New Delhi - 110061. Patanjaliayurved.net is the official online Patanjali store of Patanjali Ayurved Limited. Full range of best quality, trusted Patanjali products are now just a click away from your door step. We are dedicated to best service, quality products & real-time assistance. We present full product range of food, cosmetics, medicines and books at best prices.</p>
        <p>Patanjali Ayurved Limited produces quality Herbomineral preparations. To monitor quality, the Divya Yog Mandir Trust and Patanjali Yog Peeth grow many endangered herbs on its farmland. The principles of Good Manufacturing Practices (GMP) are rigorously followed in the plant and Company prides itself on being environment friendly.</p>
        <p>A high stress on quality, several quality circles and special quality circles and special project teams working on Total Quality Management (TQM) projects make quality a way of life in Patanjali Ayurved Limited. This enables Patanjali Ayurved Limited to produce herbomineral preparations with uniform levels of batch-to-batch consistency. This ensures that the customer gets the same high quality product regardless of where it is purchased.</p>
        <p>The special equipment required for manufacturing of sterile products (bhasma, ghanstva, eyedrop, capsule, etc.) includes component washing machines, steam sterilizers, membrane filter machines, manufacturing vessels, blenders, liquid filling machines, powder filling machines, sealing and labelling machines, vacuum testing chambers, inspection machines, lyophilisers, pressure vessels, etc. are provided depending on the type and volume of activity.</p>    
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
        </div>
      </div>
   
    </div>
  );
}
