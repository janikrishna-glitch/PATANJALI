import { combineReducers, createStore, applyMiddleware } from 'redux';

import cartReducer from './CartReducer';
import wishlistReducer from './wishlistReducer';
import authReducer from './AuthReducer';
import { thunk } from 'redux-thunk';

// Combining reducers
const rootReducer = combineReducers({
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
});

// Creating the store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// Exporting the store to be used in Provider
export default store;
