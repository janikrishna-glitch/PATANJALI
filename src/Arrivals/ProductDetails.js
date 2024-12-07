import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HealthCare.css';
import { FaEye, FaHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';

const HealthCare = () => {
  const [healthItems, setHealthItems] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/newArrivals') 
      .then(response => {
        setHealthItems(response.data);
      })
      .catch(error => {
        console.error("Error fetching the health care items!", error);
      });
  }, []);

  const handleBuyNowClick = (item) => {
    dispatch(addToCart(item)); 
    navigate('/Payment');  
  };

  const handleItemClick = (item) => {
    navigate(`/health/${item.id}`, { state: { item } }); // Navigate to Health Details page
  };

  return (
    <div className="health-care-grid">
      {healthItems && healthItems.length > 0 ? (
        healthItems.map(item => (
          <div className="health-care-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="health-care-image"
              onClick={() => handleItemClick(item)} 
            />
            <div className="health-care-details">
              <h3 className="health-care-name">{item.name}</h3>
              <p className="health-care-price">{item.price}</p>
              <div className="health-care-rating">⭐⭐⭐⭐⭐</div>
              {item.offer && <div className="health-care-offer">{item.offer}</div>}
            </div>
            <div className="health-care-icons">
              <FaEye className="health-care-icon" />
              <FaHeart className="health-care-icon" />
            </div>
            <button
              className="health-care-button"
              onClick={() => handleBuyNowClick(item)} 
            >
              Buy now
            </button>
          </div>
        ))
      ) : (
        <p>No items available.</p>
      )}
    </div>
  );
};

export default HealthCare;
