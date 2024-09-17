// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import './HealthDetails.css';

// const HealthDetails = () => {
//   const { state } = useLocation();
//   const { item } = state;
//   const [quantity, setQuantity] = useState(1);

//   const increment = () => setQuantity(quantity + 1);
//   const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : item);

//   return (
//     <div className="health-details-container">
//       <div className="health-image">
//         <img src={item.image} alt={item.name} />
//       </div>
//       <div className="health-info">
//         <h1>{item.name}</h1>
//           <div className="health-care-rating">⭐⭐⭐⭐⭐</div>
//         <p>(8 customer review)</p>
//         <p>In stock</p>
        
//         <div className="health-pricing">

        
//         <span className="health-discount">8% </span>
//         <span className="health-price">₹92</span>

//         <span className="health-mrp">M.R.P.: ₹100</span>
//       </div>
      
//         <p>Inclusive of all taxes</p>

//         <p>{
//             "Black smooth vegi-capsule with dark brown fluffy powder along with characteristic odour and taste " }</p>



//         <div className="health-quantity">
//           <button onClick={decrement}>-</button>
//           <input type="text" value={quantity} readOnly />
//           <button onClick={increment}>+</button>
//         </div>
       

//         <button className="health-add-to-cart">Add to cart</button>


//         <div className="health-details-tabs">

          

         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HealthDetails;




import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './HealthDetails.css';
import { addToCart } from '../../Redux/Action';

const HealthDetails = () => {
  const { state } = useLocation();
  const { item } = state;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch(); // Use dispatch to send actions to Redux store

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const totalPrice = item.price * quantity;

  const handleAddToCart = () => {
    // Dispatch the action to add item to the cart
    dispatch(addToCart(item, quantity));
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="health-details-container">
      <div className="health-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="health-info">
        <h1>{item.name}</h1>
        <div className="health-care-rating">⭐⭐⭐⭐⭐</div>
        <p>(8 customer reviews)</p>
        <p>In stock</p>
      
        <p style={{fontFamily:'sans-serif'}}>{"Black smooth vegi-capsule with dark brown fluffy powder along with characteristic odor and taste"}</p>
        
        <div className="health-pricing">
          <h1>{item.price}</h1> 
        </div>

        <div className="health-quantity">
          <button onClick={decrement}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={increment}>+</button>
        </div>

        <div className="health-add-to-cart">
        <button 
        onClick={handleAddToCart} 
        style={{
          backgroundColor: '#28a745',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        Add to Cart
      </button>
      
        </div>

        <div className="health-details-tabs">
        
        </div>
      </div>
    </div>
  );
};

export default HealthDetails;
