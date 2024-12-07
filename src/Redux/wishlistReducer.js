

// wishlistReducer.js
const initialState = []; 

const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            return [...state, action.payload]; // Add item to wishlist
        case 'REMOVE_FROM_WISHLIST':
            return state.filter(item => item.id !== action.payload.id); // Remove item from wishlist
        default:
            return state; // Return the current state if no action matches
    }
};

export default wishlistReducer;
