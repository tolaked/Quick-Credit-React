import * as types from "../constants/signIn";

const initialState = {
  requesting: false,
  error: null,
  user: {},

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        requesting: action.payload
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        error:null,
        user: action.payload
      };

    case types.LOGIN_ERROR:
      return {
        ...state,
        requesting: false,
        user:{},
        error: action.payload
      };
 
    default:
      return state;
  }
};

export default reducer;
