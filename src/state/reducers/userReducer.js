import * as types from "../constants/user.Types";

const initialState = {
  fetching: false,
  success: false,
  error: null,
  currentUser: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    isAdmin: null,
    status: "pending",
  },

};

export const reducer = (state = initialState, action) => {
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
   
    case types.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
 
    default:
      return state;
  }
};

export default reducer;
