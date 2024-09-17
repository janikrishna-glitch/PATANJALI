

// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// import './HealthDetails.css';
// import { addToCart } from '../../Redux/Action';

// const HealthDetails = () => {
//   const { state } = useLocation();
//   const { item } = state;
//   const [quantity, setQuantity] = useState(1);
//   const dispatch = useDispatch(); // Use dispatch to send actions to Redux store

//   const increment = () => setQuantity(quantity + 1);
//   const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

//   const totalPrice = item.price * quantity;

//   const handleAddToCart = () => {
//     // Dispatch the action to add item to the cart
//     dispatch(addToCart(item, quantity));
//     alert(`${item.name} has been added to your cart!`);
//   };

//   return (
//     <div className="health-details-container">
//       <div className="health-image">
//         <img src={item.image} alt={item.name} />
//       </div>
//       <div className="health-info">
//         <h1>{item.name}</h1>
//         <div className="health-care-rating">⭐⭐⭐⭐⭐</div>
//         <p>(8 customer reviews)</p>
//         <p>In stock</p>
      
//         <p style={{fontFamily:'sans-serif'}}>{"Black smooth vegi-capsule with dark brown fluffy powder along with characteristic odor and taste"}</p>
        
//         <div className="health-pricing">
//           <h1>₹{totalPrice}</h1> {/* Display dynamic price */}
//         </div>

//         <div className="health-quantity">
//           <button onClick={decrement}>-</button>
//           <input type="text" value={quantity} readOnly />
//           <button onClick={increment}>+</button>
//         </div>

//         <div className="health-add-to-cart">
//           <button onClick={handleAddToCart}>Add to Cart</button>
//         </div>

//         <div className="health-details-tabs">
//           {/* Add additional content like tabs for more information here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthDetails;
