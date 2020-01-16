import * as types from "../constants/user.Types";

const initialState = {
  requesting: false,
  success: false,
  error: null,
  user: {},

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUESTING:
      return {
        ...state,
        requesting: action.payload
      };

    case types.SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload
      };

    case types.ERROR:
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
