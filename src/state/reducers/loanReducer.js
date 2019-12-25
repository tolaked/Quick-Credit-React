import * as types from "../actionTypes";

const initialState = {
  loans: {
    allLoans: [],
    repaidLoans: [],
    pendingLoans: []
  },
  fetching: false,
  success: false,
  error: null
};

export const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LOANS:
      return {
        ...state,
        loans: { ...state.loans, allLoans: action.payload }
      };
    case types.ADD_PENDING_LOANS:
      return {
        ...state,
        loans: { ...state.loans, pendingLoans: action.payload }
      };
    case types.ADD_REPAID_LOANS:
      return {
        ...state,
        loans: { ...state.loans, repaidLoans: action.payload }
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
