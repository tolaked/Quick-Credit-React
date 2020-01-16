import { combineReducers } from "redux";
import signUp from "./signUp";
// import loandReducer from "./loanReducer";

const rootReducer = combineReducers({
  user: signUp,
  // loans: loandReducer
});

export default rootReducer;
