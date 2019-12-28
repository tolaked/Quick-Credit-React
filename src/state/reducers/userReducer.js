import * as types from "../actionTypes";

const initialState = {
  users: {
    data: []
  },
  currentUser: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    isAdmin: null,
    status: "pending",
    loans: []
  },
  fetching: false,
  success: false,
  error: null
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
    case types.ADD_USERS:
      return {
        ...state,
        users: action.payload
      };
    case types.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case types.USER_LOANS:
      return {
        ...state,
        currentUser: { ...state.currentUser, loans: action.payload }
      };
    default:
      return state;
  }
};

export default reducer;
