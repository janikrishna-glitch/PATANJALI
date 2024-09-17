



export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_CART_ITEM_QUANTITY = 'UPDATE_CART_ITEM_QUANTITY';







export const addToCart = (item, quantity) => {
  return {
    type: ADD_TO_CART,
    payload: { item, quantity }
  };
};


export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId
  };


};


export const setSearchTerm = (term) => ({
  type: 'SET_SEARCH_TERM',
  payload: term,
});

export const updateCartItemQuantity = (itemId, quantityChange) => {
  return {
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { itemId, quantityChange }
  };
};

