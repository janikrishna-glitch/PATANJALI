const initialState = {
  cartItems: [], // Initialize as an array
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { item, quantity } = action.payload;
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // If item is already in the cart, update its quantity
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          ),
        };
      } else {
        // If item is not in the cart, add it to the array
        return {
          ...state,
          cartItems: [...state.cartItems, { ...item, quantity }],
        };
      }
    }

    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload), // Remove item by id
      };
    }

    case 'UPDATE_CART_ITEM_QUANTITY': {
      const { itemId, quantityChange } = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, quantity: Math.max(cartItem.quantity + quantityChange, 1) } // Ensure quantity doesn't go below 1
            : cartItem
        ),
      };
    }

    default:
      return state;
  }
};

export default cartReducer;











// import { combineReducers } from 'redux';


// import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from './ActionType';

// // Initial state for cart
// const initialCartState = {
//   cartItems: [],
// };

// // Cart reducer handling cart actions
// const cartReducer = (state = initialCartState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const existingItem = state.cartItems.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map(item =>
//             item.id === action.payload.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
//         };
//       }

//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(item => item.id !== action.payload),
//       };

//     case UPDATE_CART_ITEM_QUANTITY:
//       return {
//         ...state,
//         cartItems: state.cartItems.map(item =>
//           item.id === action.payload.itemId
//             ? { ...item, quantity: action.payload.quantity }
//             : item
//         ),
//       };

//     default:
//       return state;
//   }
// };

// // If you have other reducers, combine them here
// const rootReducer = combineReducers({
//   cart: cartReducer,
//   // other reducers can go here...
// });

// export default rootReducer;
