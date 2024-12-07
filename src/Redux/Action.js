


// actions.js
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY,
  SET_USER_EMAIL,
  SET_SEARCH_TERM,
  SET_USER_DISPLAY_NAME
} from './ActionType';

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';

// User actions

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const setUserDisplayName = (displayName) => ({
  type: SET_USER_DISPLAY_NAME,
  payload: displayName,
});


export const addToWishlist = (item) => ({
  type: ADD_TO_WISHLIST,
  payload: item,
});

// Cart actions
export const addToCart = (item, quantity) => ({
  type: ADD_TO_CART,
  payload: { item, quantity },
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export const updateCartItemQuantity = (itemId, quantityChange) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { itemId, quantityChange },
});

export const setSearchTerm = (term) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});
