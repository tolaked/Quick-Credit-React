import * as types from "../constants/signUp";

const initialState = {
  requesting: false,
  success: false,
  error: null,
  user: {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    status: "",
  },

};

 const signUp = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_REQUESTING:
      return {
        ...state,
        requesting: action.payload
      };

    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload
      };

    case types.SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.payload,
        user:{}
      };
 
 
    default:
      return state;
  }
};

export default signUp;
