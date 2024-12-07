



// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom'; // Use `useNavigate`
// import { useDispatch } from 'react-redux';
// import Footer from '../../Footer/Footer';
// import { addToCart } from '../../Redux/Action';

// const HealthDetails = () => {
//   const { state } = useLocation();
//   const { item } = state || {}; // Handle undefined state
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch(); // Use dispatch to send actions to Redux store
//   const navigate = useNavigate(); // Use `useNavigate` for navigation

//   const increment = () => setQuantity(quantity + 1);
//   const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

//   const handleAddToCart = () => {
//     if (item) {
//       // Dispatch the action to add item to the cart
//       dispatch(addToCart(item, quantity));
//       alert(`${item.name} has been added to your cart!`);
//     }
//   };

//   const handleBuyNowClick = () => {
//     navigate('/Payment'); // Navigate to the PaymentPage route
//   };

//   return (
//     <div className="health-details-page">
//       <div className="health-details-container">
//         {item ? (
//           <>
//             <div className="health-image">
//               <img src={item.image} alt={item.name || 'Product Image'} />
//             </div>

//             <div className="health-info">
//               <h1 style={{ color: '#000' }}>{item.name}</h1>
//               <div className="health-care-rating">⭐⭐⭐⭐⭐</div>
//               <p>(8 customer reviews)</p>
//               <p style={{ color: 'green', fontWeight: 'bold' }}>In stock</p>

//               <div className="health-pricing" style={{ marginLeft: '294px' }}>
//                 <h2>₹{item.price}</h2>
//               </div>

//               <div className="health-add-to-cart">
//                 <div className="health-quantity">
//                   <button onClick={decrement}>-</button>
//                   <input type="text" value={quantity} readOnly />
//                   <button onClick={increment}>+</button>
//                 </div>

//                 <button onClick={handleAddToCart} className="add-to-cart">
//                   Add To Cart
//                 </button>

//                 <button className="add-to-wishlist">♥</button>
//               </div>

//               <div className="health-details-tabs">
//                 <button>Benefits</button>
//                 <button onClick={handleBuyNowClick} style={{}}>
//                   Buy Now
//                 </button>
//                 <button>How to use</button>
//                 <button>Other Product Info</button>
//               </div>
//             </div>
//           </>
//         ) : (
//           <p>Product details not available</p>
//         )}
//       </div>

//       <button
//         onClick={() => navigate('/')}
//         style={{
//           backgroundColor: '#fff',
//           color: 'white',
//           padding: '15px 20px',
//           fontSize: '1.5rem',
//           fontWeight: 'bolder',
//           color: '#000',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//         }}
//       >
//         Continue Shopping
//       </button>

//       <Footer />
//     </div>
//   );
// };

// export default HealthDetails;



import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector to get user from Redux
import Footer from '../../Footer/Footer';
import { addToCart } from '../../Redux/Action';

const HealthDetails = () => {
  const { state } = useLocation();
  const { item } = state || {};
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user); // Assuming user is stored in Redux store

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart(item, quantity));
      alert(`${item.name} has been added to your cart!`);
    }
  };

  const handleBuyNowClick = () => {
    if (user && user.isAuthenticated) {
      navigate('/Payment');
    } else {
      navigate('/login');
    }
  };
  

  return (
    <div className="health-details-page">
      <div className="health-details-container">
        {item ? (
          <>
            <div className="health-image">
              <img src={item.image} alt={item.name || 'Product Image'} />
            </div>

            <div className="health-info">
              <h1 style={{ color: '#000' }}>{item.name}</h1>
              <div className="health-care-rating">⭐⭐⭐⭐⭐</div>
              <p>(8 customer reviews)</p>
              <p style={{ color: 'green', fontWeight: 'bold' }}>In stock</p>

              <div className="health-pricing" style={{ marginLeft: '294px' }}>
                <h2>₹{item.price}</h2>
              </div>

              <div className="health-add-to-cart">
                <div className="health-quantity">
                  <button onClick={decrement}>-</button>
                  <input type="text" value={quantity} readOnly />
                  <button onClick={increment}>+</button>
                </div>

                <button onClick={handleAddToCart} className="add-to-cart">
                  Add To Cart
                </button>

                <button className="add-to-wishlist">♥</button>
              </div>

              <div className="health-details-tabs">
                <button>Benefits</button>
                <button onClick={handleBuyNowClick}>Buy Now</button>
                <button>How to use</button>
                <button>Other Product Info</button>
              </div>
            </div>
          </>
        ) : (
          <p>Product details not available</p>
        )}
      </div>

      <button
        onClick={() => navigate('/')}
        style={{
          backgroundColor: '#fff',
          color: 'white',
          padding: '15px 20px',
          fontSize: '1.5rem',
          fontWeight: 'bolder',
          color: '#000',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Continue Shopping
      </button>

      <Footer />
    </div>
  );
};

export default HealthDetails;
