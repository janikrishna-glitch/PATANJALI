




import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeFromCart, updateCartItemQuantity } from '../../Redux/Action'; 
import './Header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
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
    navigate('/PaymentPage');  
  };

  return (
    <div className="header">
      <div className="container c_flex">
        <div className="logo">
          <img
            src="https://www.patanjaliayurved.net/media/images/logo.svg"
            alt="logo"
          />
        </div>

        <div className="Middle">
          <div className="search-box f_flex">
            <input 
              type="text" 
              placeholder="Search product here..."
              className="search-input"  
            />
            <i className="fa fa-search search-icon"></i>
          </div>
        </div>

        <div className="icons-container f_flex">
          <i className="fa-regular fa-heart icon"></i>
          <i className="fa fa-user icon" onClick={handleUserIconClick}></i>
          <div className="header-cart-icon">
            <i className="fa fa-shopping-bag icon"></i>
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
                      <button onClick={() => handleRemoveFromCart(item.id)} className="cart-item-remove">
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;




// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import { removeFromCart, updateCartItemQuantity } from '../../Redux/Action'; 
// import './Header.css';

// const Header = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
 
//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };

//   const handleIncrement = (itemId) => {
//     dispatch(updateCartItemQuantity(itemId, 1)); 
//   };

//   const handleDecrement = (itemId) => {
//     dispatch(updateCartItemQuantity(itemId, -1)); 
//   };

//   const handleUserIconClick = () => {
//     navigate('/PaymentPage');  
//   };

 
  
  

//   return (
//     <div className="header">
//       <div className="container c_flex">
//         <div className="logo">
//           <img
//             src="https://www.patanjaliayurved.net/media/images/logo.svg"
//             alt="logo"
//           />
//         </div>

//         <div className="Middle">
//           <div className="search-box f_flex">
//             <input 
//               type="text" 
//               placeholder="Search product here..."
//               className="search-input"  />


             
//             <i className="fa fa-search search-icon"></i>
//           </div>
//         </div>

//         <div className="icons-container f_flex">
//           <i className="fa-regular fa-heart icon"></i>
//           <i className="fa fa-user icon" onClick={handleUserIconClick}></i> 
//           <div className="header-cart-icon">
//             <i className="fa fa-shopping-bag icon"></i>
//             {cartItems.length > 0 && (
//               <div className="cart-dropdown">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="cart-item" style={{color: 'black'}}>
//                     <div className="cart-item-left">
//                       <img src={item.image} alt={item.name} className="cart-item-image" style={{height:'100px', width:'90px'}} />
//                     </div>
//                     <div className="cart-item-right">
//                       <div className="cart-item-details">
//                         <h5>{item.name}</h5>
//                         <p>Price: ₹{item.price}</p>
//                         <div className="quantity-control">
//                           <button onClick={() => handleDecrement(item.id)} className="quantity-btn">-</button>
//                           <span>{item.quantity}</span>
//                           <button onClick={() => handleIncrement(item.id)} className="quantity-btn">+</button>
//                         </div>
//                         <p className="total-price">Total: ₹{item.price * item.quantity}</p>
//                       </div>
//                       <button onClick={() => handleRemoveFromCart(item.id)} className="cart-item-remove">
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


