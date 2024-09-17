import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HealthCare.css';
import { FaEye, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HealthCare = () => {
  const [healthItems, setHealthItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/nutraceuticals")
      .then(response => {
        setHealthItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching the health care items!", error);
      });
  }, []);

  const handleItemClick = (item) => {
    navigate(`/Health/${item.id}`, { state: { item } });
  };  

  const handleBuyNowClick = (item) => {
    // dispatch(addToCart(item)); 
    navigate('/PaymentPage');
  };

  return (
    <div className="health-care-grid">
      {healthItems.map(item => (
        <div className="health-care-card" key={item.id} onClick={() => handleItemClick(item)}>
          <img src={item.image} alt={item.name} className="health-care-image" />
          <div className="health-care-details">
            <h3 className="health-care-name">{item.name}</h3>
            <p className="health-care-price">₹{item.price}</p>
            <div className="health-care-rating">⭐⭐⭐⭐⭐</div>
            {item.offer && <div className="health-care-offer">{item.offer}</div>}
          </div>
          <div className="health-care-icons">
            <FaEye className="health-care-icon" />
            <FaHeart className="health-care-icon" />
          </div>
          <button className="health-care-button" onClick={() => handleBuyNowClick(item)}>Buy Now</button>
        </div>
      ))}
    </div>
  );
};

export default HealthCare;