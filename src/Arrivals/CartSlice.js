
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []  
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload); 
      state.items.push(action.payload);
      const item = {
        ...action.payload,
        price: action.payload.price ?? 0  
      };
      state.items.push(item);
    }
    
    
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
