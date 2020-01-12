import * as types from "../constants/loans.Types";

const initialState = {
  loans: {
    fetching: false,
  success: false,
  error: null,
    allLoans: [],
  },
  
};

export const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LOANS:
      return {
        ...state,
        loans: { ...state.loans, allLoans: action.payload }
      };
   
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
