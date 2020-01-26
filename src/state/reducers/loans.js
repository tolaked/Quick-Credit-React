import * as types from "../constants/loans";

const initialState = {
    requesting: false,
  error: '',
    loans: [],
};

export const loans = (state = initialState, action) => {
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
        error:null,
        loans: action.payload
      };

    case types.ERROR:
      return {
        ...state,
        fetching: false,
        loans:[],
        error: action.payload
      };
    default:
      return state;
  }
};

export default loans;
