import * as types from "../constants/loans";

const initialState = {
    fetching: false,
  success: false,
  error: '',
    loans: [],
};

export const loanReducer = (state = initialState, action) => {
  switch (action.type) {
 
    case types.REQUESTING:
      return {
        ...state,
        fetching: action.payload
      };

    case types.SUCCESS:
      return {
        ...state,
        fetching: false,
        success: action.payload
      };

    case types.ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default loanReducer;
