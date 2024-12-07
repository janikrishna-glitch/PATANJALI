


import { SET_USER_EMAIL,SET_USER_DISPLAY_NAME,LOGOUT_USER } from './ActionType';

// Initial state
const initialState = {
  userEmail: '',
  userDisplayName: '',
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {
        ...state,
        userEmail: action.payload,
      };
    case SET_USER_DISPLAY_NAME:
      return {
        ...state,
        userDisplayName: action.payload,
      };
    case LOGOUT_USER:
      return initialState; // Reset the state on logout
    default:
      return state;
  }
};

export default userReducer;
