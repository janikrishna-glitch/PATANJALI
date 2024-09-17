


import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEM_QUANTITY } from './Action';

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload.item, quantity: action.payload.quantity }],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    case UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.itemId
            ? { ...item, quantity: item.quantity + action.payload.quantityChange }
            : item
        ),
      };
    default:
      return state;
  }
};



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
