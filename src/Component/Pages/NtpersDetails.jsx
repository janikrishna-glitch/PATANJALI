

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './HealthDetails.css';

const HealthDetails = () => {
  const { state } = useLocation();
  const { item } = state;
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="health-details-container">
      <div className="health-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="health-info">
        <h1>{item.name}</h1>
          <div className="health-care-rating">⭐⭐⭐⭐⭐</div>
        <p>(8 customer review)</p>
        <p>In stock</p>
        
        <div className="health-pricing">
        <span className="health-discount">8% </span>
        <span className="health-price">₹92</span>
        <span className="health-mrp">M.R.P.: ₹100</span>
      </div>
      
        <p>Inclusive of all taxes</p>

        <p>{
            "Black smooth vegi-capsule with dark brown fluffy powder along with characteristic odour and taste " }</p>

        <div className="health-quantity">
          <button onClick={decrement}>-</button>
          <input type="text" value={quantity} readOnly />
          <button onClick={increment}>+</button>
        </div>

        <button className="health-add-to-cart">Add to cart</button>


        <div className="health-details-tabs">
          

         
        </div>
      </div>
    </div>
  );
};

export default HealthDetails;
