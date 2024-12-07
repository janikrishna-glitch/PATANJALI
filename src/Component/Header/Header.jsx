



import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGOUT_USER } from '../../Redux/ActionType';
import { removeFromCart, updateCartItemQuantity } from '../../Redux/Action'; 
import './Header.css';

const Header = () => {
  const user = useSelector((state) => state.auth?.user || null);
 
  const cartItems = useSelector((state) => state.cart?.cartItems || []); // Fallback to an empty array
  const userEmail = useSelector((state) => state.auth?.userEmail || null);
  const userDisplayName = useSelector((state) => state.auth?.displayName || null);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isCartEmpty, setIsCartEmpty] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');


  const handleLogout = () => {
    dispatch({ type: LOGOUT_USER });
    alert('You have been logged out successfully.');
  };


  const handleCartClick = () => {
    setIsCartEmpty(!isCartEmpty); // Toggle the cart empty state
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(updateCartItemQuantity(itemId, 1));
  };

  const handleDecrement = (itemId) => {
    dispatch(updateCartItemQuantity(itemId, -1));
  };

  const handleUserIconClick = () => {
    if (user) {
      navigate('/Payment'); // Navigate to the payment page if the user is logged in
    } else {
      navigate('/login'); // Otherwise navigate to the login page
    }
  };

  const handleBuyNowClick = (itemId) => {
    // Navigate to payment page when 'Buy Now' is clicked
    navigate('/Payment');
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent default form submission
    const query = searchQuery.toLowerCase().trim();
    
    console.log('Current search query:', query); // Debugging statement
  
    // Define your routes mapping
    const routes = {
      health: '/Health',
      medicine: '/Medicine',
    naturalpersonalcare: '/naturalpersonalcare',
      nutraceuticals: '/nutraceuticals',
      food: '/food',
      paridhan: '/Paridhan',
      publication:'/publication',
      about: '/About',
      dealsandoffer:'/dealsandoffer',
     
    };
  
    // Navigate to the corresponding route if it exists
    if (routes[query]) {
      console.log(`Navigating to: ${routes[query]}`); // Debugging statement
      navigate(routes[query]);
    } else {
      alert('No matching products found for your search.'); // Fallback alert for unmatched queries
    }
  };
  


  

    // Navigate to the corresponding route if it exists
    

  return (
    <div className="header">
      <div className="container c_flex">
        <div className="logo">
          <img src="https://www.patanjaliayurved.net/media/images/logo.svg" alt="logo" />
        </div>

        <div className="Middle">
          <form onSubmit={handleSearch} className="search-box f_flex">
            <input 
              type="text" 
              placeholder="Search product here..." 
              className="search-input" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{fontSize:'15px'}} // Update search query state
            />
            <button type="submit" className="search-btn">
              <i className="fa fa-search search-icon"></i>
            </button>
          </form>
        </div>

        <div className="icons-container f_flex">
          <i className="fa-regular fa-heart icon"></i>
          <i className="fa fa-user icon" onClick={handleUserIconClick}></i>

          <div className="header-cart-icon">
            <i className="fa fa-shopping-bag icon" onClick={handleCartClick} style={{ cursor: 'pointer', fontSize: '20px' }}></i>

            {isCartEmpty && (
              <div className="cart-empty-message">
                <h5>Cart is empty</h5>
              </div>
            )}

            {cartItems.length > 0 && (
              <div className="cart-dropdown">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item" style={{ color: 'black' }}>
                    <div className="cart-item-left">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                        style={{ height: '100px', width: '90px' }}
                      />
                    </div>
                    <div className="cart-item-right">
                      <div className="cart-item-details">
                        <h5>{item.name}</h5>
                        <p>Price: ₹{item.price}</p>
                        <div className="quantity-control">
                          <button onClick={() => handleDecrement(item.id)} className="quantity-btn">-</button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleIncrement(item.id)} className="quantity-btn">+</button>
                        </div>
                        <p className="total-price">Total: ₹{item.price * item.quantity}</p>
                      </div>
                      <div className="cart-item-actions">
                        <button onClick={() => handleRemoveFromCart(item.id)} className="cart-item-remove">
                          Remove
                        </button>
                        <button onClick={() => handleBuyNowClick(item.id)} className="cart-item-buy-now">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {userEmail ? (
          <div className="welcome-message">
            <span>Welcome, {userDisplayName || 'User'}!</span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
};

export default Header;
