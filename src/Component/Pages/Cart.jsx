import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items || []);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', alignItems: 'center' }}>
              <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '20px' }} />
              <div>
                <h3>{item.name}</h3>
                
               
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
