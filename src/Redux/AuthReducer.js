// Example Reducer (authReducer.js)
const initialState = {
  userEmail: null,
  displayName: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_EMAIL':
      return {
        ...state,
        userEmail: action.payload,
      };
    case 'SET_USER_DISPLAY_NAME':
      return {
        ...state,
        displayName: action.payload,
      };
    case 'LOGOUT_USER':
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
